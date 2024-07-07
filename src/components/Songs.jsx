import React from "react";
import SongList from "./Music/SongList";
import useSongContext from "../hooks/useSongContext";

const Songs = () => {
  const { songs, setSongs } = useSongContext();

  const onSongReorder = (newSongs) => {
    setSongs(newSongs);
  };

  return (
    <div className="bg-transparent">
      <div className="flex flex-row justify-between font-poppins text-lg font-bold text-[#CFC5C5] px-4">
        <span>Popular</span>
        <span>See All</span>
      </div>
      <SongList songs={songs} onSongReorder={onSongReorder} />
    </div>
  );
};

export default Songs;
