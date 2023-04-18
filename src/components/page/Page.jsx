import React from "react";
import Posts from "./posts/Posts";
import Stories from "./stories/Stories";
import './page.css';

const Page = () => {
  return (
    <div className="page-container">
      <Stories />
      <Posts />
    </div>
  )
}
export default Page;