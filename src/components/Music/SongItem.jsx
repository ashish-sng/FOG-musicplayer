import useSongContext from "../../hooks/useSongContext";

const SongItem = ({
  title,
  artist,
  index,
  playing,
  album,
  duration,
  url,
  imageURL,
}) => {
  const { currentSong, setCurrentSong } = useSongContext();

  const isActive = currentSong.title === title;

  const containerClasses = `grid grid-cols-12 gap-4 items-center justify-center font-poppins text-lg py-1 px-4 border-none ${
    isActive
      ? "bg-[#520000] text-white font-bold"
      : "text-[#CFC5C5] font-medium"
  }`;
  return (
    <div
      onClick={() =>
        setCurrentSong({ title, artist, album, duration, playing, url, index })
      }
      className={containerClasses}
    >
      <div className="col-span-1">{index + 1}</div>
      <div className="col-span-4 flex flex-row items-center justify-start gap-2">
        <img src={imageURL} alt={title} className="w-10 h-10" />
        {title.toString().length > 15
          ? `${title.toString().substring(0, 15)}...`
          : title}
      </div>
      <div className="col-span-2">{playing}</div>
      <div className="col-span-2">{duration}</div>
      <div className="col-span-3">{album}</div>
    </div>
  );
};

export default SongItem;
