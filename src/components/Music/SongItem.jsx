import useSongContext from "../../hooks/useSongContext";

const SongItem = ({ title, artist, index, playing, album, duration, url }) => {
  const { setCurrentSong } = useSongContext();
  return (
    <div
      onClick={() =>
        setCurrentSong({ title, artist, album, duration, playing, url })
      }
      className="grid grid-cols-6 gap-4 items-center py-2 px-4 bg-green-400 border-2"
    >
      <div className="col-span-1">{index}</div>
      <div className="col-span-2">{title}</div>
      <div className="col-span-1">{playing}</div>
      <div className="col-span-1">{duration}</div>
      <div className="col-span-1">{album}</div>
    </div>
  );
};

export default SongItem;

// {
//     title: "Billie Jean",
//     artist: "Michael Jackson",
//     album: "Thriller",
//     duration: "4:54",
//     playing: "648,745,045",
//     url: BilleJean,
//   },
