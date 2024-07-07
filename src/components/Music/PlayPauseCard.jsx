import React, { useEffect, useState } from "react";
import useSongContext from "../../hooks/useSongContext";
import { Howl, Howler } from "howler";
import LoopButton from "../svgs/Loop";
import BackButton from "../svgs/Back";
import PlayButton from "../svgs/Play";
import NextButton from "../svgs/Next";
import PauseButton from "../svgs/Pause";
import ShuffleButton from "../svgs/Shuffle";

const ButtonControls = () => {
  const { currentSong, songs, setPlaying, setCurrentSong, playing } =
    useSongContext();
  const [sound, setSound] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (sound) {
      sound.unload();
    }
    if (currentSong) {
      const newSound = new Howl({ src: [currentSong.url] });
      setSound(newSound);
      if (playing) {
        newSound.play();
      }
      newSound.on("end", () => setPlaying(false));
    }
    console.log("Current Song:", sound);
  }, [currentSong]);

  useEffect(() => {
    if (sound) {
      if (playing) {
        sound.play();
      } else {
        sound.pause();
      }
    }
  }, [playing]);

  useEffect(() => {
    let interval;
    if (sound && playing) {
      interval = setInterval(() => {
        setCurrentTime(Math.floor(sound.seek()));
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [sound, playing]);

  const handlePlayPauseSong = () => {
    if (playing) {
      sound.pause();
    } else {
      sound.play();
    }
    setPlaying(!playing);
  };

  const handleLoop = () => {
    console.log("Loop button clicked!");
  };

  const handleBack = () => {
    console.log("Back button clicked!");
    const currentIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    setPlaying(false);
    setCurrentTime(0);
    setCurrentSong(prevSong);
    setPlaying(true);
  };

  const handleNext = () => {
    console.log("Next button clicked!");
    const currentIndex = songs.findIndex(
      (song) => song.title === currentSong.title
    );
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setPlaying(false);
    setCurrentTime(0);
    setCurrentSong(nextSong);
    setPlaying(true);
  };

  const handleShuffle = () => {
    console.log("Shuffle button clicked!");
  };

  const getProgressPercentage = () => {
    if (!currentSong || !sound) {
      return 0;
    }
    return (currentTime / sound._duration) * 100;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Debugging logs
  useEffect(() => {
    console.log("Current Time:", currentTime);
    console.log("Current Song Duration:", currentSong?.duration);
    console.log("Progress Percentage:", getProgressPercentage());
  }, [currentTime, currentSong]);

  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex text-white items-center gap-5">
        <p>{formatTime(currentTime)}</p>
        <div className="w-[25vw] max-w-[150px] bg-gray-300 rounded-full cursor-pointer">
          <div
            style={{ width: `${getProgressPercentage()}%` }}
            className="h-1 bg-red-600 rounded-full"
          />
        </div>
        <p>{formatTime(sound?._duration || 0)}</p>
      </div>
      <div className="flex flex-row justify-between w-full text-white px-2">
        <button className="" onClick={handleLoop}>
          <LoopButton />
        </button>
        <button className="" onClick={handleBack}>
          <BackButton />
        </button>
        <button className="" onClick={handlePlayPauseSong}>
          {playing ? <PauseButton /> : <PlayButton />}
        </button>
        <button className="" onClick={handleNext}>
          <NextButton />
        </button>
        <button className="" onClick={handleShuffle}>
          <ShuffleButton />
        </button>
      </div>
    </div>
  );
};

export default ButtonControls;
