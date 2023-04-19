import React from "react";
import "./posts.css";

const Posts = () => {
  const postsInfo = [
    {
      "name":"cat01",
      "likes": 45,
      "caption": "cat01",
      "imagePosted": "./post's-profiles/pexels-peng-louis-1643457.jpg",
      "comments": [],
      "timePosted": "24m"
    },
    {
      "name":"cat02",
      "likes": 164,
      "caption": "cat02",
      "imagePosted": "./post's-profiles/pexels-tranmautritam-2194261.jpg",
      "comments": [],
      "timePosted": "1h"
    },
    {
      "name":"cat03",
      "likes": 3,
      "caption": "cat03",
      "imagePosted": "./post's-profiles/pexels-peng-louis-1643457.jpg",
      "comments": [],
      "timePosted": "2h"
    },
    {
      "name":"cat04",
      "likes": 796,
      "caption": "cat04",
      "imagePosted": "./post's-profiles/pexels-dids-2127433.jpg",
      "comments": [],
      "timePosted": "3d"
    },
    {
      "name":"",
      "likes": 40,
      "caption": "cat05",
      "imagePosted": "./post's-profiles/pexels-alex-bargain-1472999.jpg",
      "comments": [],
      "timePosted": "1w"
    }
  ]

  return (
    <div className="posts-container">
      {postsInfo.map((post) => (
      <div className="ind-post-container">
        <div className="post-header">
          <img className="post-profile-photo" />
          <p className="post-profile-name">{post.name} - {post.timePosted}</p>
        </div>
        <img className="posted-image" src={require(`${post.imagePosted}`)}/>
        <div className="bottom-post-info">

        </div>
      </div>
      ))}

    </div>
  )
}

export default Posts;