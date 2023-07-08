import React from "react";

const Avatar = ({src}) => {
  return (
    <div>
      <img
        className="rounded-full"
        width={30}
        height={30}
        alt="Avatar"
        src={src}
      />
    </div>
  );
};

export default Avatar;
