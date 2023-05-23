import React from 'react';



export default function About() {
  return (
    <div className="mt-32 mx-3">
      {/* Portfolio Picture */}
      <div>
                <img
                    src="/images/Profile_Pic_1.jpg"
                    alt="profile"
                    className="w-80 border-4 border-quaternary mx-auto my-2"
                />
            </div>
      {/* About Me */}
      <div className="text-center my-3">
        <h2>My Portfoilio</h2>
        <h2>
          Talk about yourself. I am a Jr Developer with a passion for process
        </h2>
      </div>
    </div>
  );
}