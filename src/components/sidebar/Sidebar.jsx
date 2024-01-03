import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./sidebar.css"

const Sidebar = () => {
  const sidebarItems = [ 
    {
      "name": "Home",
      "src": "/images/icons/home-icon.png"
    },
    {
      "name": "Search",
      "src": "/images/icons/search-icon.png"
    },
    {
      "name": "Explore",
      "src": "/images/icons/compass-icon.png"
    },
    {
      "name": "Reels",
      "src": "/images/icons/reels-icon.png"
    },
    {
      "name": "Messages",
      "src": "/images/icons/messages-icon.png"
    },
    {
      "name": "Notifications",
      "src": "/images/icons/heart-icon.png"
    },
    {
      "name": "Create",
      "src": "/images/icons/add-new-icon.png"
    },
    {
      "name": "Profile",
      "src": "/images/icons/user-profile-photo.jpg"
    },
  ]
  return (
    <div className="sidebar">
      <p className="sidebar-header">Instagram</p>

      {sidebarItems.map((item) => (
        <div className="sidebar-item"> 
          <img className="icon-image" src={item.src} />
          <a className="side-bar-option">{item.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Sidebar;