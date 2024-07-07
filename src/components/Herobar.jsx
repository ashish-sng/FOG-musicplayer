import React from "react";
import ArtistBanner from "./svgs/Artist";

const Herobar = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-r from-red-500 to-gray-800">
      <ArtistBanner />
    </div>
  );
};

export default Herobar;
