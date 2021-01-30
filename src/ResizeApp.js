import React, { useState, useEffect } from "react";

const ResizeApp = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const isMobile = winWidth < 768;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });
  }, []);

  return (
    <div>
      <h1>{winWidth}</h1>
      {isMobile && <h1> Show only Mobile device</h1>}
    </div>
  );
};

export default ResizeApp;
