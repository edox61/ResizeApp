import React, { useState, useEffect } from "react";

const ResizeApp = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <h1>{winWidth}</h1>
    </div>
  );
};

export default ResizeApp;
