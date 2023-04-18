import React from "react";
import Page from "./components/page/Page";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div className="content">
      <Sidebar />
      <Page/>
    </div>
  );
}

export default App;
