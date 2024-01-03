import React from "react";
import Page from "./components/page/Page";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <hr className="vertical" />
      <Page/>
    </div>
  );
}

export default App;
