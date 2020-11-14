import { useState, useEffect, useDebugValue } from "react";

const useSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth);

  useDebugValue("Hook personalizado");

  useEffect(() => {
    window.addEventListener("resize", cambioResolucion);
    return () => window.removeEventListener("resize", cambioResolucion);
  }, []);

  const cambioResolucion = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height };
};

export default useSize;
