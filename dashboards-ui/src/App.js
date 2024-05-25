import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import About from "./components/About";
import DemoPage from "./components/DemoPage";
import Scheduler from "./components/Scheduler";
import ConfirmationPage from "./components/ConfirmationPage";
import Orders from "./components/Orders";
import Payments from "./components/Payments";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import GetStarted from "./components/GetStarted";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Technology from "./components/Technology";
import Philantrophy from "./components/Philantrophy";
import ProcessingSuccess from "./components/ProcessingSuccess";
import ErrorPage from "./components/ErrorPage";
import ChangeCategory from "./components/ChangeCategory";
import Billing from "./components/Billing";
import EditorPage from "./components/EditorPage";
import BillingProd from "./components/BillingProd";
import OrdersProd from "./components/OrdersProd";
import ChangeCategoryProd from "./components/ChangeCategoryProd";
import FreeMembership from "./components/FreeMembership";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/billing" render={() => <Billing />} />
        <Route exact path="/billing-prod" render={() => <BillingProd />} />
        <Route exact path="/editor" render={() => <EditorPage />} />
        <Route
          exact
          path="/free-membership"
          render={() => <FreeMembership />}
        />
        <Route
          exact
          path="/change-category"
          render={() => <ChangeCategory />}
        />
        <Route
          exact
          path="/change-category-prod"
          render={() => <ChangeCategoryProd />}
        />
        <Route exact path="/error-page" render={() => <ErrorPage />} />
        <Route exact path="/demo" render={() => <DemoPage />} />
        <Route exact path="/scheduler" render={() => <Scheduler />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/technology" render={() => <Technology />} />
        <Route exact path="/philantrophy" render={() => <Philantrophy />} />
        <Route
          exact
          path="/processing-success"
          render={() => <ProcessingSuccess />}
        />
        <Route
          exact
          path="/forgot-password"
          render={() => <ForgotPassword />}
        />
        <Route
          exact
          path="/confirmation-order"
          render={() => <ConfirmationPage />}
        />
        <Route exact path="/orders" render={() => <Orders />} />
        <Route exact path="/orders-prod" render={() => <OrdersProd />} />
        <Route exact path="/payments" render={() => <Payments />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route exact path="/get-started" render={() => <GetStarted />} />
        <Route exact path="/signup" render={() => <SignUp />} />
      </Switch>
    );
  }
}

export default withRouter(App);
