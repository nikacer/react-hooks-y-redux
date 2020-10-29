import React, { Fragment } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/action/counter.action";

import environment from "../../environments/environment";

import "./counter.scss";

const Counter = (props) => {
  return (
    <Fragment>
      <h1>Componente Count</h1>
      <div className="counter-class">
        <button onClick={props.incrementar}>+</button>
        <button onClick={props.decrementar}>-</button>
        <h1>{props.counter}</h1>
        <p> environment: {environment.baseUrl}</p>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementar: () => dispatch(increment()),
    decrementar: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
