import React from "react";
import { useHistory } from "react-router";

export default function Home() {
  const { push } = useHistory();
  return (
    <div className="content">
      Home
      <button onClick={() => push("/detail")}>go to detail</button>
    </div>
  );
}
