import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Header.scss";
export default function Header({ title = "App" }) {
  const history = useHistory();
  const location = useLocation();
  const showBackBtn = location.pathname !== "/";
  return (
    <div className="app-header">
      <header>{title}</header>
      {showBackBtn && (
        <button className="back-btn" onClick={history.goBack}>
          Back
        </button>
      )}
    </div>
  );
}
