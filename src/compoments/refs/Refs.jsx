import React, {
  useRef,
  useEffect,
  Fragment,
  forwardRef,
  useContext,
  useImperativeHandle,
  useState,
  useLayoutEffect,
} from "react";
import { UserContext } from "../../context/userContext";
import Chart from "chart.js";

function Refs() {
  const inputExample = useRef(null);
  let { user, login, logout } = useContext(UserContext);
  const cambioGrafica = () => {
    inputExample.current.cambioTitle(
      Math.round(Math.random() * 100) + " - otro"
    );
  };

  return (
    <Fragment>
      {user && <h1>{user.name}</h1>}
      <button onClick={user ? logout : login}>
        {user ? "Logout" : "Login"}
      </button>
      <h1>Graficas</h1>
      <HerenciaRef ref={inputExample} />
      <button onClick={cambioGrafica}>Cambiar titulo grafica</button>
    </Fragment>
  );
}

const HerenciaRef = forwardRef((props, ref) => {
  let graph;

  useLayoutEffect(() => {
    if (ref.current) createGraph();
  }, [ref]);

  const createGraph = () => {
    const ctx = ref.current.getContext("2d");
    graph = new Chart(ctx, {
      label: "test",
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Numero votos",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "grafica",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  useImperativeHandle(ref, () => ({
    cambioTitle: (newTitle) => {
      graph.options.title.text = newTitle;
      if (graph) graph.update();
    },
  }));

  return <canvas id="myChart" width="400" height="400" ref={ref}></canvas>;
});

export default Refs;
