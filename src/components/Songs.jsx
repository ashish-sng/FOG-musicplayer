import React from "react";
import SongList from "./Music/SongList";
import useSongContext from "../hooks/useSongContext";

const Songs = () => {
  const { songs } = useSongContext();
  return (
    <div className="bg-transparent">
      <SongList songs={songs} onSongReorder={() => {}} />
    </div>
  );
};

export default Songs;
