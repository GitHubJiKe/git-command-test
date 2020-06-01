import React from "react";
import { useHistory } from "react-router-dom";
import appStore from "../store/appStore";
import { useObserver } from "mobx-react";
import "./Header.scss";
export default function Header({ title = "App" }) {
  const history = useHistory();
  return useObserver(() => (
    <div className="app-header">
      <header>{title}</header>
      {!appStore.isHomePage && (
        <button className="back-btn" onClick={history.goBack}>
          Back
        </button>
      )}
    </div>
  ));
}
