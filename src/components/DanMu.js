import React, { useLayoutEffect, useEffect, useState } from "react";

// position: absolute;
// left: 0;
// visibility: hidden;
// animation: danmu 5s linear 0s;
// padding: 10px 20px;
// border-radius: 5px;

const DanMu = ({
  text,
  bgColor = "#fff",
  color = "#000",
  top = "0px",
  duration = "5s",
}) => {
  const [show, setShow] = useState(true);

  useLayoutEffect(() => {
    let style = document.createElement("style");
    document.head.appendChild(style);
    let width = window.innerWidth;
    let from = `from { visibility: visible; -webkit-transform: translate3d(${width}px,0,0); }`;
    let to = `to { visibility: visible; -webkit-transform: translate3d(-100%,0,0); }`;
    style.sheet.insertRule(`@-webkit-keyframes danmu { ${from} ${to} }`, 0);
  }, []);

  useEffect(() => {
    const time = parseInt(duration.split("s")[0]) * 1000;
    let timer = setInterval(() => {
      setShow(false);
    }, time);
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, []);

  if (!show) {
    return <></>;
  }

  return (
    <div
      className="danmu"
      style={{
        position: "absolute",
        backgroundColor: bgColor,
        opacity: "0.7",
        left: 0,
        visibility: "hidden",
        animation: `danmu ${duration} linear 0s`,
        padding: `4px 8px`,
        borderRadius: 5,
        userSelect: "none",
        color,
        top,
      }}
    >
      {text}
    </div>
  );
};

export default DanMu;
