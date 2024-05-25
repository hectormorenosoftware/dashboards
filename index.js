const express = require("express");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const e = require("express");

const stripe = require("stripe")("");
const app = express();

let setCache = function (req, res, next) {
  // here you can define period in second, this one is 5 minutes
  const period = 60 * 14400;

  // you only want to cache for GET requests
  if (req.method == "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    // for the other requests set strict no caching parameters
    res.set("Cache-control", `no-store`);
  }

  // remember to call next() to pass on the request
  next();
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./build/images");
  },
  filename: function (req, file, cb) {
    const fileName = path.parse(file.originalname).ext;

    cb(null, req.params.userName + req.params.picNumber + fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//The five at the end represents megabytes.
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

app.use(express.static("build"));

// app.use(setCache);

app.use(cors());
app.use(bodyParser.json());
const YOUR_DOMAIN = "http://localhost:5000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
        price: "price_1JtaTVJYfPxdOrXDLUMksGtI",
        quantity: 1,
      },
    ],
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: "http://localhost:5000/#/",
  });

  res.redirect(303, session.url);
});

app.post("/charge-card", async (req, res) => {
  const { payment_number, parsedExpMonth, parsedExpYear, cvv, email } =
    req.body.params;

  try {
    const token = await stripe.tokens.create({
      card: {
        number: payment_number,
        exp_month: parsedExpMonth,
        exp_year: parsedExpYear,
        cvc: cvv,
      },
    });

    await stripe.charges.create({
      amount: 1500,
      currency: "usd",
      source: token.id,
      description: "Dashboards 30 day subscription.",
      receipt_email: email,
    });

    res.send("Success");
  } catch (e) {
    res.status(400).send("Credit Card Declined");
    throw new Error(e);
  }
});

app.get("/get-users", (req, res) => {
  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);

  res.send(jsondata);
});

app.post("/create-route/:routeName", (req, res) => {
  const rawdata = fs.readFileSync("./database/routes.json");
  const jsonData = JSON.parse(rawdata);
  const { routeName } = req.params;
  jsonData["routes"].push(routeName);
  const jsonToWrite = JSON.stringify(jsonData);
  fs.writeFileSync("./database/routes.json", jsonToWrite);
  res.send("It's alive!");
});

app.post("/login/:email/:password", (req, res) => {
  const { email, password } = req.params;

  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const userCredentials = jsondata[email];
  if (userCredentials.password === password) {
    res.send(userCredentials);
  } else {
    res.status(400);
    throw new Error("Wrong password");
  }
});

app.get("/get-dashboard-data/:email", (req, res) => {
  const { email } = req.params;
  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const user = jsondata[email];

  res.send(user);
});

app.put("/update-user", (req, res) => {
  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const user = jsondata[req.body.params.email];

  const newUser = {
    email: req.body.params.email,
    username: req.body.params.userName,
    password: user.password,
    paidSubscription: user.paidSubscription,
    published: "Y",
    businessName: req.body.params.businessName,
    businessNumber: req.body.params.businessNumber,
    businessType: req.body.params.businessType,
    dateOfPurchase: user.dateOfPurchase,
    dateOfExpiration: user.dateOfExpiration,
    firstColor: req.body.params.firstColor,
    secondColor: req.body.params.secondColor,
    titleColor: req.body.params.titleColor,
    marketingData: {
      marketingImageName: req.body.params.marketingImageName,
      marketingImageExt: req.body.params.marketingImageExt,
      marketingImage: req.body.params.marketingImage,
      marketingText: req.body.params.marketingText,
      marketingTitle: req.body.params.marketingTitle,
      category: req.body.params.category,
    },
    userProducts: [...req.body.params.userProducts],
  };

  delete jsondata[req.body.params.email];
  jsondata[req.body.params.email] = newUser;
  const jsonData = JSON.stringify(jsondata);
  fs.writeFileSync("./database/users.json", jsonData);
  res.send("Success!");
});

app.post("/create-user/:email/:username/:password", (req, res) => {
  const { email, username, password } = req.params;

  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const users = Object.values(jsondata);

  if (users.length === 5000) {
    throw new Error("Maximum amount of users reached");
  }

  const rawdataOrders = fs.readFileSync("./database/orders.json");
  const jsondataOrders = JSON.parse(rawdataOrders);

  const today = new Date();
  const thirtyDaySubscription = new Date(today);
  thirtyDaySubscription.setDate(thirtyDaySubscription.getDate() + 30);

  jsondataOrders[email] = {
    orders: [],
  };

  jsondata[email] = {
    email,
    username,
    password,
    paidSubscription: "Y",
    published: "N",
    businessName: "",
    businessNumber: "",
    businessType: "",
    dateOfPurchase: today.toLocaleDateString(),
    dateOfExpiration: thirtyDaySubscription.toLocaleDateString(),
    firstColor: "#1d2671",
    secondColor: "#19547b",
    titleColor: "#FFFFFF",
    marketingData: {
      marketingImageName: "",
      marketingImageExt: "",
      marketingImage: "",
      marketingText: "",
      marketingTitle: "",
      category: "",
    },
    userProducts: [
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
      {
        image: "",
        imageName: "",
        titleOfProduct: "",
        priceOfProduct: "",
        fileExt: "",
      },
    ],
  };
  const jsonData = JSON.stringify(jsondata);
  fs.writeFileSync("./database/users.json", jsonData);

  const jDO = JSON.stringify(jsondataOrders);
  fs.writeFileSync("./database/orders.json", jDO);

  res.send("Success!");
});

app.post("/upload/:userName/:picNumber", upload.single("file"), (req, res) => {
  if (req.file) {
    res.json(req.file);
  } else throw "error";
});

app.delete("/upload/:userName/:picNumber/:ext", (req, res) => {
  const fileName =
    req.params.userName + req.params.picNumber + "." + req.params.ext;

  try {
    fs.unlinkSync(`build/images/${fileName}`);

    res.status(201).send({ message: "Image deleted" });
  } catch (e) {
    res.status(400).send({
      message: "Error deleting image!",
      error: e.toString(),
      req: req.body,
    });
  }
});

app.post("/renew-subscription/:email", (req, res) => {
  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const user = jsondata[req.params.email];
  const today = new Date();
  const thirtyDaySubscription = new Date(today);
  thirtyDaySubscription.setDate(thirtyDaySubscription.getDate() + 30);

  const newUserData = {
    email: user.email,
    username: user.userName,
    password: user.password,
    paidSubscription: user.paidSubscription,
    published: "Y",
    businessName: user.businessName,
    businessNumber: user.businessNumber,
    businessType: user.businessType,
    dateOfPurchase: today.toLocaleDateString(),
    dateOfExpiration: thirtyDaySubscription.toLocaleDateString(),
    firstColor: user.firstColor,
    secondColor: user.secondColor,
    titleColor: user.titleColor,
    marketingData: {
      marketingImageName: user.marketingData.marketingImageName,
      marketingImageExt: user.marketingData.marketingImageExt,
      marketingImage: user.marketingData.marketingImage,
      marketingText: user.marketingData.marketingText,
      marketingTitle: user.marketingData.marketingTitle,
      category: user.marketingData.category,
    },
    userProducts: [...user.userProducts],
  };

  delete jsondata[req.params.email];

  jsondata[req.params.email] = newUserData;

  const jsonData = JSON.stringify(jsondata);

  fs.writeFileSync("./database/users.json", jsonData);

  res.send("Success!");
});

app.post("/delete-user/:email", (req, res) => {
  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  delete jsondata[req.params.email];

  const jsonData = JSON.stringify(jsondata);

  fs.writeFileSync("./database/users.json", jsonData);

  res.send("Success");
});

app.post("/delete-user-all-orders/:email", (req, res) => {
  const rawdata = fs.readFileSync("./database/orders.json");
  const jsondata = JSON.parse(rawdata);
  delete jsondata[req.params.email];

  const jsonData = JSON.stringify(jsondata);

  fs.writeFileSync("./database/orders.json", jsonData);

  res.send("Success");
});

app.get("/get-orders/:email", (req, res) => {
  const rawdata = fs.readFileSync("./database/orders.json");
  const jsondata = JSON.parse(rawdata);
  const userOrders = jsondata[req.params.email];

  res.send(userOrders);
});

app.post("/create-order/:email", (req, res) => {
  const rawdata = fs.readFileSync("./database/orders.json");
  const jsondata = JSON.parse(rawdata);
  const userOrders = jsondata[req.params.email];
  let addedOrders = [...userOrders.orders, req.body.params];

  delete jsondata[req.params.email];

  jsondata[req.params.email] = {
    orders: addedOrders,
  };

  const jsonData = JSON.stringify(jsondata);

  fs.writeFileSync("./database/orders.json", jsonData);

  res.send("Success");
});

app.post("/delete-order/:email/:id", (req, res) => {
  const rawdata = fs.readFileSync("./database/orders.json");
  const jsondata = JSON.parse(rawdata);
  const userOrders = jsondata[req.params.email];
  const newOrders = userOrders.orders.filter(
    (order) => order.id !== parseInt(req.params.id)
  );

  delete jsondata[req.params.email];

  jsondata[req.params.email] = {
    orders: newOrders,
  };

  const jsonData = JSON.stringify(jsondata);

  fs.writeFileSync("./database/orders.json", jsonData);

  res.send("Success");
});

app.get("/marketing-details/:username/:category/:page", (req, res) => {
  const { username, category, page } = req.params;

  if (username !== "default" && category !== "default") {
    const rawdataByCategoryAndUserName = fs.readFileSync(
      "./database/users.json"
    );
    const jsondataByCategoryAndUserName = JSON.parse(
      rawdataByCategoryAndUserName
    );
    const valuesByCategoryAndUserName = Object.values(
      jsondataByCategoryAndUserName
    );

    const filteredCategoryFirst = valuesByCategoryAndUserName.filter((c) => {
      return c.marketingData.category == category;
    });

    const filteredUserNameSecond = filteredCategoryFirst.filter((d) => {
      return d.username == username;
    });

    const filterByUserNameAndCategoryPublished = filteredUserNameSecond.filter(
      (m) => {
        return m.published === "Y";
      }
    );

    const mappedValuesByUserNameAndCategory =
      filterByUserNameAndCategoryPublished.map((x) => {
        return {
          marketingImg: x.marketingData.marketingImage,
          marketingText: x.marketingData.marketingText,
          marketingTitle: x.marketingData.marketingTitle,
          email: x.email,
        };
      });

    if (page === "1") {
      return res.send(mappedValuesByUserNameAndCategory.slice(0, 100));
    }

    if (page === "2") {
      return res.send(mappedValuesByUserNameAndCategory.slice(100, 200));
    }

    if (page === "3") {
      return res.send(mappedValuesByUserNameAndCategory.slice(200, 300));
    }

    if (page === "4") {
      return res.send(mappedValuesByUserNameAndCategory.slice(300, 400));
    }

    if (page === "5") {
      return res.send(mappedValuesByUserNameAndCategory.slice(400, 500));
    }

    if (page === "6") {
      return res.send(mappedValuesByUserNameAndCategory.slice(500, 600));
    }

    if (page === "7") {
      return res.send(mappedValuesByUserNameAndCategory.slice(600, 700));
    }

    if (page === "8") {
      return res.send(mappedValuesByUserNameAndCategory.slice(700, 800));
    }

    if (page === "9") {
      return res.send(mappedValuesByUserNameAndCategory.slice(800, 900));
    }

    if (page === "10") {
      return res.send(mappedValuesByUserNameAndCategory.slice(900, 1000));
    }

    if (page === "10") {
      return res.send(mappedValuesByUserNameAndCategory.slice(900, 1000));
    }

    if (page === "11") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1000, 1100));
    }

    if (page === "12") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1100, 1200));
    }

    if (page === "13") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1200, 1300));
    }

    if (page === "14") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1300, 1400));
    }

    if (page === "15") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1500, 1600));
    }

    if (page === "16") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1600, 1700));
    }

    if (page === "17") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1700, 1800));
    }

    if (page === "18") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1800, 1900));
    }

    if (page === "19") {
      return res.send(mappedValuesByUserNameAndCategory.slice(1900, 2000));
    }

    if (page === "20") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2000, 2100));
    }

    if (page === "21") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2100, 2200));
    }

    if (page === "22") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2200, 2300));
    }

    if (page === "23") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2300, 2400));
    }

    if (page === "24") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2400, 2500));
    }

    if (page === "25") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2500, 2600));
    }

    if (page === "26") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2600, 2700));
    }

    if (page === "27") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2700, 2800));
    }

    if (page === "28") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2800, 2900));
    }

    if (page === "29") {
      return res.send(mappedValuesByUserNameAndCategory.slice(2900, 3000));
    }

    if (page === "30") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3000, 3100));
    }

    if (page === "31") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3100, 3200));
    }

    if (page === "32") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3200, 3300));
    }

    if (page === "33") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3300, 3400));
    }

    if (page === "34") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3400, 3500));
    }

    if (page === "35") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3500, 3600));
    }

    if (page === "36") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3600, 3700));
    }

    if (page === "37") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3700, 3800));
    }

    if (page === "38") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3800, 3900));
    }

    if (page === "39") {
      return res.send(mappedValuesByUserNameAndCategory.slice(3900, 4000));
    }

    if (page === "40") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4000, 4100));
    }

    if (page === "41") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4100, 4200));
    }

    if (page === "42") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4200, 4300));
    }

    if (page === "43") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4300, 4400));
    }

    if (page === "44") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4400, 4500));
    }

    if (page === "45") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4500, 4600));
    }

    if (page === "46") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4600, 4700));
    }

    if (page === "47") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4700, 4800));
    }

    if (page === "48") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4800, 4900));
    }

    if (page === "49") {
      return res.send(mappedValuesByUserNameAndCategory.slice(4900, 5000));
    }

    return res.send(mappedValuesByUserNameAndCategory);
  }

  if (username === "default" && category !== "default") {
    const rawdataByCategory = fs.readFileSync("./database/users.json");
    const jsondataByCategory = JSON.parse(rawdataByCategory);
    const valuesByCategory = Object.values(jsondataByCategory);
    const filteredCategory = valuesByCategory.filter((f) => {
      return f.marketingData.category == category;
    });

    const filterByCategoryPublished = filteredCategory.filter((a) => {
      return a.published === "Y";
    });

    const mappedValuesByCategory = filterByCategoryPublished.map((o) => {
      return {
        marketingImg: o.marketingData.marketingImage,
        marketingText: o.marketingData.marketingText,
        marketingTitle: o.marketingData.marketingTitle,
        email: o.email,
      };
    });

    if (page === "1") {
      return res.send(mappedValuesByCategory.slice(0, 100));
    }

    if (page === "2") {
      return res.send(mappedValuesByCategory.slice(100, 200));
    }

    if (page === "3") {
      return res.send(mappedValuesByCategory.slice(200, 300));
    }

    if (page === "4") {
      return res.send(mappedValuesByCategory.slice(300, 400));
    }

    if (page === "5") {
      return res.send(mappedValuesByCategory.slice(400, 500));
    }

    if (page === "6") {
      return res.send(mappedValuesByCategory.slice(500, 600));
    }

    if (page === "7") {
      return res.send(mappedValuesByCategory.slice(600, 700));
    }

    if (page === "8") {
      return res.send(mappedValuesByCategory.slice(700, 800));
    }

    if (page === "9") {
      return res.send(mappedValuesByCategory.slice(800, 900));
    }

    if (page === "10") {
      return res.send(mappedValuesByCategory.slice(900, 1000));
    }

    if (page === "10") {
      return res.send(mappedValuesByCategory.slice(900, 1000));
    }

    if (page === "11") {
      return res.send(mappedValuesByCategory.slice(1000, 1100));
    }

    if (page === "12") {
      return res.send(mappedValuesByCategory.slice(1100, 1200));
    }

    if (page === "13") {
      return res.send(mappedValuesByCategory.slice(1200, 1300));
    }

    if (page === "14") {
      return res.send(mappedValuesByCategory.slice(1300, 1400));
    }

    if (page === "15") {
      return res.send(mappedValuesByCategory.slice(1500, 1600));
    }

    if (page === "16") {
      return res.send(mappedValuesByCategory.slice(1600, 1700));
    }

    if (page === "17") {
      return res.send(mappedValuesByCategory.slice(1700, 1800));
    }

    if (page === "18") {
      return res.send(mappedValuesByCategory.slice(1800, 1900));
    }

    if (page === "19") {
      return res.send(mappedValuesByCategory.slice(1900, 2000));
    }

    if (page === "20") {
      return res.send(mappedValuesByCategory.slice(2000, 2100));
    }

    if (page === "21") {
      return res.send(mappedValuesByCategory.slice(2100, 2200));
    }

    if (page === "22") {
      return res.send(mappedValuesByCategory.slice(2200, 2300));
    }

    if (page === "23") {
      return res.send(mappedValuesByCategory.slice(2300, 2400));
    }

    if (page === "24") {
      return res.send(mappedValuesByCategory.slice(2400, 2500));
    }

    if (page === "25") {
      return res.send(mappedValuesByCategory.slice(2500, 2600));
    }

    if (page === "26") {
      return res.send(mappedValuesByCategory.slice(2600, 2700));
    }

    if (page === "27") {
      return res.send(mappedValuesByCategory.slice(2700, 2800));
    }

    if (page === "28") {
      return res.send(mappedValuesByCategory.slice(2800, 2900));
    }

    if (page === "29") {
      return res.send(mappedValuesByCategory.slice(2900, 3000));
    }

    if (page === "30") {
      return res.send(mappedValuesByCategory.slice(3000, 3100));
    }

    if (page === "31") {
      return res.send(mappedValuesByCategory.slice(3100, 3200));
    }

    if (page === "32") {
      return res.send(mappedValuesByCategory.slice(3200, 3300));
    }

    if (page === "33") {
      return res.send(mappedValuesByCategory.slice(3300, 3400));
    }

    if (page === "34") {
      return res.send(mappedValuesByCategory.slice(3400, 3500));
    }

    if (page === "35") {
      return res.send(mappedValuesByCategory.slice(3500, 3600));
    }

    if (page === "36") {
      return res.send(mappedValuesByCategory.slice(3600, 3700));
    }

    if (page === "37") {
      return res.send(mappedValuesByCategory.slice(3700, 3800));
    }

    if (page === "38") {
      return res.send(mappedValuesByCategory.slice(3800, 3900));
    }

    if (page === "39") {
      return res.send(mappedValuesByCategory.slice(3900, 4000));
    }

    if (page === "40") {
      return res.send(mappedValuesByCategory.slice(4000, 4100));
    }

    if (page === "41") {
      return res.send(mappedValuesByCategory.slice(4100, 4200));
    }

    if (page === "42") {
      return res.send(mappedValuesByCategory.slice(4200, 4300));
    }

    if (page === "43") {
      return res.send(mappedValuesByCategory.slice(4300, 4400));
    }

    if (page === "44") {
      return res.send(mappedValuesByCategory.slice(4400, 4500));
    }

    if (page === "45") {
      return res.send(mappedValuesByCategory.slice(4500, 4600));
    }

    if (page === "46") {
      return res.send(mappedValuesByCategory.slice(4600, 4700));
    }

    if (page === "47") {
      return res.send(mappedValuesByCategory.slice(4700, 4800));
    }

    if (page === "48") {
      return res.send(mappedValuesByCategory.slice(4800, 4900));
    }

    if (page === "49") {
      return res.send(mappedValuesByCategory.slice(4900, 5000));
    }

    return res.send(mappedValuesByCategory);
  }

  if (username !== "default" && category === "default") {
    const rawdataByUser = fs.readFileSync("./database/users.json");
    const jsondataByUser = JSON.parse(rawdataByUser);
    const valuesByUser = Object.values(jsondataByUser);
    const filteredUser = valuesByUser.filter((f) => {
      return f.username == username;
    });

    const filterByUserPublished = filteredUser.filter((b) => {
      return b.published === "Y";
    });

    const mappedValuesByUser = filterByUserPublished.map((n) => {
      return {
        marketingImg: n.marketingData.marketingImage,
        marketingText: n.marketingData.marketingText,
        marketingTitle: n.marketingData.marketingTitle,
        email: n.email,
      };
    });

    if (page === "1") {
      return res.send(mappedValuesByUser.slice(0, 100));
    }

    if (page === "2") {
      return res.send(mappedValuesByUser.slice(100, 200));
    }

    if (page === "3") {
      return res.send(mappedValuesByUser.slice(200, 300));
    }

    if (page === "4") {
      return res.send(mappedValuesByUser.slice(300, 400));
    }

    if (page === "5") {
      return res.send(mappedValuesByUser.slice(400, 500));
    }

    if (page === "6") {
      return res.send(mappedValuesByUser.slice(500, 600));
    }

    if (page === "7") {
      return res.send(mappedValuesByUser.slice(600, 700));
    }

    if (page === "8") {
      return res.send(mappedValuesByUser.slice(700, 800));
    }

    if (page === "9") {
      return res.send(mappedValuesByUser.slice(800, 900));
    }

    if (page === "10") {
      return res.send(mappedValuesByUser.slice(900, 1000));
    }

    if (page === "10") {
      return res.send(mappedValuesByUser.slice(900, 1000));
    }

    if (page === "11") {
      return res.send(mappedValuesByUser.slice(1000, 1100));
    }

    if (page === "12") {
      return res.send(mappedValuesByUser.slice(1100, 1200));
    }

    if (page === "13") {
      return res.send(mappedValuesByUser.slice(1200, 1300));
    }

    if (page === "14") {
      return res.send(mappedValuesByUser.slice(1300, 1400));
    }

    if (page === "15") {
      return res.send(mappedValuesByUser.slice(1500, 1600));
    }

    if (page === "16") {
      return res.send(mappedValuesByUser.slice(1600, 1700));
    }

    if (page === "17") {
      return res.send(mappedValuesByUser.slice(1700, 1800));
    }

    if (page === "18") {
      return res.send(mappedValuesByUser.slice(1800, 1900));
    }

    if (page === "19") {
      return res.send(mappedValuesByUser.slice(1900, 2000));
    }

    if (page === "20") {
      return res.send(mappedValuesByUser.slice(2000, 2100));
    }

    if (page === "21") {
      return res.send(mappedValuesByUser.slice(2100, 2200));
    }

    if (page === "22") {
      return res.send(mappedValuesByUser.slice(2200, 2300));
    }

    if (page === "23") {
      return res.send(mappedValuesByUser.slice(2300, 2400));
    }

    if (page === "24") {
      return res.send(mappedValuesByUser.slice(2400, 2500));
    }

    if (page === "25") {
      return res.send(mappedValuesByUser.slice(2500, 2600));
    }

    if (page === "26") {
      return res.send(mappedValuesByUser.slice(2600, 2700));
    }

    if (page === "27") {
      return res.send(mappedValuesByUser.slice(2700, 2800));
    }

    if (page === "28") {
      return res.send(mappedValuesByUser.slice(2800, 2900));
    }

    if (page === "29") {
      return res.send(mappedValuesByUser.slice(2900, 3000));
    }

    if (page === "30") {
      return res.send(mappedValuesByUser.slice(3000, 3100));
    }

    if (page === "31") {
      return res.send(mappedValuesByUser.slice(3100, 3200));
    }

    if (page === "32") {
      return res.send(mappedValuesByUser.slice(3200, 3300));
    }

    if (page === "33") {
      return res.send(mappedValuesByUser.slice(3300, 3400));
    }

    if (page === "34") {
      return res.send(mappedValuesByUser.slice(3400, 3500));
    }

    if (page === "35") {
      return res.send(mappedValuesByUser.slice(3500, 3600));
    }

    if (page === "36") {
      return res.send(mappedValuesByUser.slice(3600, 3700));
    }

    if (page === "37") {
      return res.send(mappedValuesByUser.slice(3700, 3800));
    }

    if (page === "38") {
      return res.send(mappedValuesByUser.slice(3800, 3900));
    }

    if (page === "39") {
      return res.send(mappedValuesByUser.slice(3900, 4000));
    }

    if (page === "40") {
      return res.send(mappedValuesByUser.slice(4000, 4100));
    }

    if (page === "41") {
      return res.send(mappedValuesByUser.slice(4100, 4200));
    }

    if (page === "42") {
      return res.send(mappedValuesByUser.slice(4200, 4300));
    }

    if (page === "43") {
      return res.send(mappedValuesByUser.slice(4300, 4400));
    }

    if (page === "44") {
      return res.send(mappedValuesByUser.slice(4400, 4500));
    }

    if (page === "45") {
      return res.send(mappedValuesByUser.slice(4500, 4600));
    }

    if (page === "46") {
      return res.send(mappedValuesByUser.slice(4600, 4700));
    }

    if (page === "47") {
      return res.send(mappedValuesByUser.slice(4700, 4800));
    }

    if (page === "48") {
      return res.send(mappedValuesByUser.slice(4800, 4900));
    }

    if (page === "49") {
      return res.send(mappedValuesByUser.slice(4900, 5000));
    }

    return res.send(mappedValuesByUser);
  }

  const rawdata = fs.readFileSync("./database/users.json");
  const jsondata = JSON.parse(rawdata);
  const values = Object.values(jsondata);

  const filterByValues = values.filter((c) => {
    return c.published === "Y";
  });

  const mappedValues = filterByValues.map((v) => {
    return {
      marketingImg: v.marketingData.marketingImage,
      marketingText: v.marketingData.marketingText,
      marketingTitle: v.marketingData.marketingTitle,
      email: v.email,
    };
  });

  if (page === "1") {
    return res.send(mappedValues.slice(0, 100));
  }

  if (page === "2") {
    return res.send(mappedValues.slice(100, 200));
  }

  if (page === "3") {
    return res.send(mappedValues.slice(200, 300));
  }

  if (page === "4") {
    return res.send(mappedValues.slice(300, 400));
  }

  if (page === "5") {
    return res.send(mappedValues.slice(400, 500));
  }

  if (page === "6") {
    return res.send(mappedValues.slice(500, 600));
  }

  if (page === "7") {
    return res.send(mappedValues.slice(600, 700));
  }

  if (page === "8") {
    return res.send(mappedValues.slice(700, 800));
  }

  if (page === "9") {
    return res.send(mappedValues.slice(800, 900));
  }

  if (page === "10") {
    return res.send(mappedValues.slice(900, 1000));
  }

  if (page === "10") {
    return res.send(mappedValues.slice(900, 1000));
  }

  if (page === "11") {
    return res.send(mappedValues.slice(1000, 1100));
  }

  if (page === "12") {
    return res.send(mappedValues.slice(1100, 1200));
  }

  if (page === "13") {
    return res.send(mappedValues.slice(1200, 1300));
  }

  if (page === "14") {
    return res.send(mappedValues.slice(1300, 1400));
  }

  if (page === "15") {
    return res.send(mappedValues.slice(1500, 1600));
  }

  if (page === "16") {
    return res.send(mappedValues.slice(1600, 1700));
  }

  if (page === "17") {
    return res.send(mappedValues.slice(1700, 1800));
  }

  if (page === "18") {
    return res.send(mappedValues.slice(1800, 1900));
  }

  if (page === "19") {
    return res.send(mappedValues.slice(1900, 2000));
  }

  if (page === "20") {
    return res.send(mappedValues.slice(2000, 2100));
  }

  if (page === "21") {
    return res.send(mappedValues.slice(2100, 2200));
  }

  if (page === "22") {
    return res.send(mappedValues.slice(2200, 2300));
  }

  if (page === "23") {
    return res.send(mappedValues.slice(2300, 2400));
  }

  if (page === "24") {
    return res.send(mappedValues.slice(2400, 2500));
  }

  if (page === "25") {
    return res.send(mappedValues.slice(2500, 2600));
  }

  if (page === "26") {
    return res.send(mappedValues.slice(2600, 2700));
  }

  if (page === "27") {
    return res.send(mappedValues.slice(2700, 2800));
  }

  if (page === "28") {
    return res.send(mappedValues.slice(2800, 2900));
  }

  if (page === "29") {
    return res.send(mappedValues.slice(2900, 3000));
  }

  if (page === "30") {
    return res.send(mappedValues.slice(3000, 3100));
  }

  if (page === "31") {
    return res.send(mappedValues.slice(3100, 3200));
  }

  if (page === "32") {
    return res.send(mappedValues.slice(3200, 3300));
  }

  if (page === "33") {
    return res.send(mappedValues.slice(3300, 3400));
  }

  if (page === "34") {
    return res.send(mappedValues.slice(3400, 3500));
  }

  if (page === "35") {
    return res.send(mappedValues.slice(3500, 3600));
  }

  if (page === "36") {
    return res.send(mappedValues.slice(3600, 3700));
  }

  if (page === "37") {
    return res.send(mappedValues.slice(3700, 3800));
  }

  if (page === "38") {
    return res.send(mappedValues.slice(3800, 3900));
  }

  if (page === "39") {
    return res.send(mappedValues.slice(3900, 4000));
  }

  if (page === "40") {
    return res.send(mappedValues.slice(4000, 4100));
  }

  if (page === "41") {
    return res.send(mappedValues.slice(4100, 4200));
  }

  if (page === "42") {
    return res.send(mappedValues.slice(4200, 4300));
  }

  if (page === "43") {
    return res.send(mappedValues.slice(4300, 4400));
  }

  if (page === "44") {
    return res.send(mappedValues.slice(4400, 4500));
  }

  if (page === "45") {
    return res.send(mappedValues.slice(4500, 4600));
  }

  if (page === "46") {
    return res.send(mappedValues.slice(4600, 4700));
  }

  if (page === "47") {
    return res.send(mappedValues.slice(4700, 4800));
  }

  if (page === "48") {
    return res.send(mappedValues.slice(4800, 4900));
  }

  if (page === "49") {
    return res.send(mappedValues.slice(4900, 5000));
  }

  res.send(mappedValues);
});

//This creates a worker for every CPU, this allows the server to be ranned in a multi-thread manner, meaning you can use every
//core in your machine to serve your application, this will make your server faster.

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    // Create a worker
    cluster.fork();
  }
} else {
  app.listen(process.env.PORT || 5000, () => {
    console.log("listenting");
  });
}
