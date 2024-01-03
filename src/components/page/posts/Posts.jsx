import React from "react";
import "./posts.css";

const Posts = () => {
  const postsInfo = [
    {
      "name":"cat_01",
      "profilePhoto":"/images/profile-photos/cat-looking-at-toy.jpg",
      "likes": 45,
      "caption": "cat01",
      "photoPosted": "/images/posted-photos/cat-with-closed-eyes.jpg",
      "comments": [],
      "timePosted": "24m"
    },
    {
      "name":"cat_02",
      "profilePhoto":"/images/profile-photos/cat-running.jpg",
      "likes": 164,
      "caption": "cat02",
      "photoPosted": "/images/posted-photos/cat-with-flower-collar.jpg",
      "comments": [],
      "timePosted": "1h"
    },
    {
      "name":"cat_03",
      "profilePhoto":"/images/profile-photos/cat-sitting-down.jpg",
      "likes": 3,
      "caption": "cat03",
      "photoPosted": "/images/posted-photos/kitten-smelling-flower.jpg",
      "comments": [],
      "timePosted": "2h"
    },
    {
      "name":"cat_04",
      "profilePhoto":"/images/profile-photos/cat-wrapped-in-blanket.jpg",
      "likes": 796,
      "caption": "cat04",
      "photoPosted": "/images/posted-photos/pink-blue-eyed-cat.jpg",
      "comments": [],
      "timePosted": "3d"
    },
    {
      "name":"cat_05",
      "profilePhoto":"/images/profile-photos/gray-cat-laying-down.jpg",
      "likes": 40,
      "caption": "cat05",
      "photoPosted":"/images/posted-photos/seated-cat.jpg",
      "comments": [],
      "timePosted": "1w"
    }
  ]

  return (
    <div className="posts-container">
      {postsInfo.map((post) => (
      <div className="ind-post-container">
        <div className="post-header">
          <img className="post-profile-photo" src={post.profilePhoto} />
          <p className="post-profile-name">{post.name} •</p>
          <p className="post-time-posted">{post.timePosted}</p>
        </div>
        <img className="posted-image" src={post.photoPosted}/>
        <div className="bottom-post-info">

        </div>
      </div>
      ))}

    </div>
  )
}

export default Posts; 