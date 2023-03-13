import React, { Component } from "react";
import { SET_DECREMENT, SET_INCREAMENT } from "../../app/counter";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Counter extends Component {
  handleToDecrement = () => {
    this.props.dispatch({
      type: SET_DECREMENT,
    });
  };

  handleToIncrement = () => {
    this.props.dispatch({
      type: SET_INCREAMENT,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Counter</h1>
        <div className="row">
          <button
            className="button"
            aria-label="Decrement value"
            onClick={() => this.handleToDecrement()}
          >
            -
          </button>
          <span className="value">{this?.props?.Counter}</span>
          <button
            className="button"
            aria-label="Increment value"
            onClick={() => this.handleToIncrement()}
          >
            +
          </button>
        </div>
        <Link className="add__user" to={"/user-List"}>
          Add User List
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Counter: state.counterReducer.counter,
  };
};

export default connect(mapStateToProps)(Counter);
