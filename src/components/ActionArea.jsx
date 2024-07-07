import React, { useEffect, useState } from "react";
import ActionArtist from "./svgs/ActionArtist";
import useSongContext from "../hooks/useSongContext";
import ButtonControls from "./Music/PlayPauseCard";

const ActionArea = () => {
  const { currentSong, songs, setPlaying, playing } = useSongContext();

  return (
    <div className="flex flex-col justify-end bg-yellow-400">
      <div className="flex p-2 m-2 rounded-lg border-black bg-[#6B0000] py-4 flex-col items-center justify-evenly gap-4">
        <span className="text-white font-semibold">Now playing</span>
        <ActionArtist />
        <span className="text-white font-semibold">{currentSong.title}</span>
        <span className="text-white font-semibold">{currentSong.artist}</span>
        <ButtonControls />
      </div>
    </div>
  );
};

export default ActionArea;
