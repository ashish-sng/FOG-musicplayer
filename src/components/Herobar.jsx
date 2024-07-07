import React from "react";
import ArtistBanner from "./svgs/Artist";

const Herobar = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[400px] h-[350px] bg-transparent">
      <ArtistBanner />
    </div>
  );
};

export default Herobar;
