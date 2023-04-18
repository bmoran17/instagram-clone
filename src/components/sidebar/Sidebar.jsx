import React from "react";
import 'material-icons/iconfont/material-icons.css';
import "./sidebar.css"

const Sidebar = () => {
  const sidebarItems = [ 
    {
      "name": "Home",
      "src": "./icons/icons8-home-24.png"
    },
    {
      "name": "Search",
      "src": "./icons/icons8-search-24.png"
    },
    {
      "name": "Explore",
      "src": "./icons/icons8-compass-24.png"
    },
    {
      "name": "Reels",
      "src": "./icons/icons8-instagram-reels-24.png"
    },
    {
      "name": "Messages",
      "src": "./icons/icons8-messenger-24.png"
    },
    {
      "name": "Notifications",
      "src": "./icons/icons8-favorite-24.png"
    },
    {
      "name": "Create",
      "src": "./icons/icons8-add-new-24.png"
    },
    {
      "name": "Profile",
      "src": "./icons/pexels-pixabay-45201.jpg"
    },
  ]
  return (
    <div className="sidebar">
      <p className="sidebar-header">Instagram</p>

      {sidebarItems.map((item) => (
        <div className="sidebar-item"> 
          <img className="icon-image" src={require(`${item.src}`)} />
          <a className="side-bar-option">{item.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Sidebar;