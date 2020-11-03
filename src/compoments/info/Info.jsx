import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { updateName } from "../../redux/action/user.action";

const Info = ({ user: { name }, count, updateName }) => {
  let baseStyle = {
    color: "red",
    fontSize: "15px",
    textTransform: "capitalize",
    border: "1px solid red",
    marginBottom: "10px",
    padding: "10px",
  };

  /**
   * ejemplo hooks
   */
  const [style, setStyle] = useState(baseStyle);

  let estatica = "No soy reactiva";

  const selectColor = (max = 3) => {
    if (count === max) {
      setStyle({ ...baseStyle, color: "green" });
      estatica = "Soy reactiva";
    } else {
      setStyle((st) => {
        return { ...st, color: "red" };
      });
    }

    console.log(estatica);
  };

  useEffect(selectColor, [count]);

  let newName;
  const handlerChange = (event) => {
    newName = event.target.value;
  };

  return (
    <Fragment>
      <h1>Componente Info</h1>
      <div style={style} className="info-container">
        <h1>
          {name} - {count}
        </h1>
        <p>{estatica}</p>
        <br />
        <input type="text" id="name" onChange={handlerChange} />
        <button onClick={() => updateName(newName)}>Cambiar nombre</button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (name) => dispatch(updateName(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
