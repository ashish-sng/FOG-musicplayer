import { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songs, onSongReorder }) => {
  const [draggedSong, setDraggedSong] = useState(null);

  const handleDragStart = (e, song) => {
    setDraggedSong(song);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetSong) => {
    if (draggedSong && draggedSong !== targetSong) {
      const newSongs = [...songs];
      const draggedSongIndex = songs.indexOf(draggedSong);
      const targetSongIndex = songs.indexOf(targetSong);
      newSongs.splice(draggedSongIndex, 1);
      newSongs.splice(targetSongIndex, 0, draggedSong);
      setDraggedSong(null);
      onSongReorder(newSongs);
    }
  };

  return (
    <ul className="bg-yellow-400">
      <li className="grid grid-cols-6 gap-4 items-center font-bold py-2 px-4 bg-transparent">
        <div className="col-span-1">#</div>
        <div className="col-span-2">title</div>
        <div className="col-span-1">playing</div>
        <div className="col-span-1">duration</div>
        <div className="col-span-1">album</div>
      </li>
      {songs.map((song, index) => (
        <li
          draggable
          onDragStart={(e) => handleDragStart(e, song)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, song)}
          key={song.title}
        >
          <SongItem {...song} />
        </li>
      ))}
    </ul>
  );
};

export default SongList;
