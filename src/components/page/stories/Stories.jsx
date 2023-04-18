import React from "react";
import "./stories.css";


const Stories = () => {
  const storiesProfiles = [
    {
      "name": "cat1",
      "photo": "./profile-photos/pexels-наталья-семенкова-991831.jpg",
    },
    {
      "name": "cat2",
      "photo": "./profile-photos/pexels-tatiana-аzatskaya-3616232.jpg",
    },
    {
      "name": "cat3",
      "photo": "./profile-photos/pexels-leonardo-de-oliveira-1770918.jpg",
    },
    {
      "name": "cat4",
      "photo": "./profile-photos/pexels-inge-wallumrød-177809.jpg",
    },
    {
      "name": "cat5",
      "photo": "./profile-photos/pexels-evg-kowalievska-1416803.jpg",
    },
    {
      "name": "cat6",
      "photo": "./profile-photos/pexels-evg-kowalievska-1416803.jpg",
    },
    {
      "name": "cat7",
      "photo": "./profile-photos/pexels-evg-kowalievska-1416803.jpg",
    },
    {
      "name": "cat8",
      "photo": "./profile-photos/pexels-evg-kowalievska-1416803.jpg",
    }
  ]

  return (
    <div className="stories-container">
      {storiesProfiles.map((profile) => (
        <div className="story-container">
          <img className="profile-photos" src={require(`${profile.photo}`)} />
          <p className="profile-names">{profile.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Stories;