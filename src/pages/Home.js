import React, { useState } from "react";
import Button from "peteryuan-button";
import "./Home.scss";
import DanMu from "../components/DanMu";
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export default function Home() {
  const [text, setText] = useState("");
  const [danmus, setDanmus] = useState([]);

  return (
    <div className="content">
      <input
        value={text}
        onChange={(e) => setText(e.currentTarget.value.trim())}
      />
      <br />
      <Button
        onClick={() => {
          setDanmus((d) => {
            d.push({
              text,
              bgColor: getRandomColor(),
              color: getRandomColor(),
            });
            return [...d];
          });
          setText("");
        }}
        type="danger"
      >
        发弹幕
      </Button>
      {danmus.map((d, idx) => {
        const top = (idx + 1) * 20 + "px";
        return (
          <DanMu
            key={idx}
            text={d.text}
            bgColor={d.bgColor}
            color={d.color}
            top={top}
            duration={idx + 2 + "s"}
          />
        );
      })}
    </div>
  );
}
