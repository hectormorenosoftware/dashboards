import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { removeOrder } from "../redux/actions/ordersActions";

class Orders extends React.PureComponent {
  goBackToDemo = () => {
    this.props.history.push("/demo");
  };

  render() {
    const { orders, removeOrderSelection, titleColor, businessType } =
      this.props;

    if (orders.length === 0) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px 50px",
          }}
        >
          <button className="go-back" onClick={this.goBackToDemo}>
            {" "}
            Go Back
          </button>
          <h1 className="table-no-orders-color">
            {" "}
            {businessType === "sales"
              ? "You have no orders"
              : "You have no meetings"}{" "}
          </h1>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "50px 50px",
          }}
        >
          <h2 style={{ textAlign: "center", color: titleColor }}>
            {businessType === "sales" ? "Orders" : "Meetings"}{" "}
          </h2>
          <button className="go-back" onClick={this.goBackToDemo}>
            {" "}
            Go Back
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <table className="table">
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Phone Number</th>
                <th style={{ textAlign: "left" }}>First Name</th>
                <th style={{ textAlign: "left" }}>Last Name</th>
                <th style={{ textAlign: "left" }}>Email</th>
                <th style={{ textAlign: "left" }}>Time</th>
                <th style={{ textAlign: "left" }}>
                  {businessType === "sales" ? "Order" : "Meeting"} Type
                </th>
                <th style={{ textAlign: "left" }}>
                  Delete {businessType === "sales" ? "Order" : "Meeting"}
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0
                ? orders.map((order, index) => {
                    return (
                      <tr key={index}>
                        <td>{order.phoneNumber}</td>
                        <td>{order.name}</td>
                        <td>{order.lastName}</td>
                        <td>{order.email}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>
                          <button
                            type="button"
                            className="btn-danger"
                            onClick={removeOrderSelection.bind(this, order)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    orders: state.ordersReducer.orders,
    titleColor: state.editorReducerDemo.titleColor,
    businessType: state.editorReducerDemo.businessType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeOrderSelection: (order) => dispatch(removeOrder(order)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));
