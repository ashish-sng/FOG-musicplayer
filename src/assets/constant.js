import { DiscoverIcon } from "../components/svgs/DiscoverIcon";
import { HomeIcon } from "../components/svgs/HomeIcon";
import { LibraryIcon } from "../components/svgs/LibraryIcon";
import { LogoutIcon } from "../components/svgs/Logout";
import { SettingsIcon } from "../components/svgs/Settings";
import { TrendIcon } from "../components/svgs/TrendIcon";
import BilleJean from "./audio/BillieJean.mp3";
import BeatIt from "./audio/BeatIt.mp3";
import DontStop from "./audio/DontStoptilYouGetEnough.mp3";
import RockWithYou from "./audio/RockWithYou.mp3";
import SmoothCriminal from "./audio/SmoothCriminal.mp3";

export const MENU = [
  {
    icon: <HomeIcon className="h-8 w-8" />,
    title: "Home",
  },
  {
    icon: <TrendIcon className="h-8 w-8" />,
    title: "Trends",
  },
  {
    icon: <LibraryIcon className="h-8 w-8" />,
    title: "Library",
  },
  {
    icon: <DiscoverIcon className="h-8 w-8" />,
    title: "Discover",
  },
];

export const GENERAL = [
  {
    icon: <SettingsIcon className="h-8 w-8" />,
    title: "Settings",
  },
  {
    icon: <LogoutIcon className="h-8 w-8" />,
    title: "Logout",
  },
];

export const SONGS = [
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "4:54",
    playing: "648,745,045",
    url: BilleJean,
  },
  {
    title: "Beat It",
    artist: "Michael Jackson",
    album: "Thriller",
    duration: "4:18",
    playing: "1,048,745,045",
    url: BeatIt,
  },
  {
    title: "Don't Stop 'Til You Get Enough",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "6:05",
    playing: "106,745,045",
    url: DontStop,
  },
  {
    title: "Rock With You",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "3:40",
    playing: "158,040,045",
    url: RockWithYou,
  },
  {
    title: "Smooth Criminal",
    artist: "Michael Jackson",
    album: "Bad",
    duration: "4:17",
    playing: "148,745,045",
    url: SmoothCriminal,
  },
];
