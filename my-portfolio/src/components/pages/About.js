import React from 'react';


export default function About() {
  return (
    <div className="mt-32 mx-3">
      {/* Portfolio Picture */}
      <figure>
        <img src={"/images/Profile_pic.jpg"}
          className="w-80 border-4 border-quaternary mx-auto my-2"
        ></img>

      </figure>
      {/* About Me */}
      <div className="text-center my-3">
        <h2>My Portfoilio</h2>
        <h2>
          Talk about yourself.
        </h2>
      </div>
    </div>
  );
}