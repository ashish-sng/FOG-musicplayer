import DiscoverIcon from "../components/svgs/DiscoverIcon";
import HomeIcon from "../components/svgs/HomeIcon";
import LibraryIcon from "../components/svgs/LibraryIcon";
import LogoutIcon from "../components/svgs/Logout";
import SettingsIcon from "../components/svgs/Settings";
import TrendIcon from "../components/svgs/TrendIcon";
import BilleJean from "./audio/BillieJean.mp3";
import BeatIt from "./audio/BeatIt.mp3";
import DontStop from "./audio/DontStoptilYouGetEnough.mp3";
import RockWithYou from "./audio/RockWithYou.mp3";
import SmoothCriminal from "./audio/SmoothCriminal.mp3";

export const HEADERS = [
  { title: "Music" },
  { title: "Podcast" },
  { title: "Live" },
  { title: "Radio" },
];

export const MENU = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: "Home",
  },
  {
    icon: <TrendIcon className="h-6 w-6" />,
    title: "Trends",
  },
  {
    icon: <LibraryIcon className="h-6 w-6" />,
    title: "Library",
  },
  {
    icon: <DiscoverIcon className="h-6 w-6" />,
    title: "Discover",
  },
];

export const GENERAL = [
  {
    icon: <SettingsIcon className="h-6 w-6" />,
    title: "Settings",
  },
  {
    icon: <LogoutIcon className="h-6 w-6" />,
    title: "Logout",
  },
];

export const SONGS = [
  {
    title: "Billie Jean",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ieegWrIeQUPiYWj8yPP7Ri7dBqzBUWebE8ofSFPN27PJonBaw-bfLKgYys6VasG4TKpiV5Ix3mCOc-GMmXLdEp9BiLqzYLMdrPtu0xvrx-MY0cpn2KMgW8xJs6RIg3TEC-V-1YZjck2aGTiv7S4MGdLaEmOigAZe86Ib4Ph4x0zj~LbOQzrMDdpCod83fHPeZCxs0YT1IRGeSmPnmNESFCvPFdzXzXcyG~VHuvfO2MJuS3hfmjPZvcBSQKuSKxur-Uu1CWY-DwZPjoUEpp08~sfOGFrbTWwvk6K5NsF87h7XDf0loT3aT-bgr-82qHxXiZwtcSWOLBajK7JueC1uLQ__",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:53",
    playing: "648,745,045",
    url: BilleJean,
  },
  {
    title: "Beat It",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/fab5/7d37/dac780b3d02d707441f0334cbb22d318?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ieegWrIeQUPiYWj8yPP7Ri7dBqzBUWebE8ofSFPN27PJonBaw-bfLKgYys6VasG4TKpiV5Ix3mCOc-GMmXLdEp9BiLqzYLMdrPtu0xvrx-MY0cpn2KMgW8xJs6RIg3TEC-V-1YZjck2aGTiv7S4MGdLaEmOigAZe86Ib4Ph4x0zj~LbOQzrMDdpCod83fHPeZCxs0YT1IRGeSmPnmNESFCvPFdzXzXcyG~VHuvfO2MJuS3hfmjPZvcBSQKuSKxur-Uu1CWY-DwZPjoUEpp08~sfOGFrbTWwvk6K5NsF87h7XDf0loT3aT-bgr-82qHxXiZwtcSWOLBajK7JueC1uLQ__",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:19",
    playing: "748,745,045",
    url: BeatIt,
  },
  {
    title: "Don't Stop 'Til You Get Enough",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH3AJdFHi9P8Ea1YFJ9bBmr5r3l1WoDlvy4fOT5ef5gb5EQCWhilvS9T7~MJfOL32t4AlzdZFNzo4MP0UhBc19-XgaEA2Of50DWBRsorH4t0Mu6GMHmff3fNpWjZviUTS5YncT3A8e9zus2172UQqe5JT2Xs9Y8axvhNBzClR5mdd8w8SYYrAgN-Vg-Q0j3y75x2m0GE3C5zwz~GXrRB3obwgEcWMfx~Ie2IxEVAyhYx8xpFgj1lIcQOQkbJF2yBOZa~rKhJmA9lXeiQaeWwq~IU0xZQoEqJ2Ws4aAeJnajwn-Ix6Wzyq7AC2-92CA-x~Vd~W5ddO9tOXDQsdzrjvg__",
    artist: "Michael Jackson",
    album: "Bad 25th Anniversary",
    duration: "5:58",
    playing: "106,745,045",
    url: DontStop,
  },
  {
    title: "Rock With You - Single Version",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/0125/de17/5e419f447d656fefcf56c79444973408?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I0VzHYZ~5IrHQ5Af9MqfPSYk4cLz2GYHHkKMT5qPt8c4BZ0kJFzUhkDrONMRqP4TdjriqelY-BR34NERaXWyqzomdQXxRKjiRrGSeYTKk~ilHhRWGD5YTVTVN5uIfwCXjSjYNt7q~HLHe~O77-1oR6fxntN~V6-V5rELxn2CPRaxpunTRx0thf5OszYCmBcZUlg7UoBE97T8U6uqgyAQ1Sxe5kLG4qSYhEsRyMMdZALUTViyvYLOy1lN0ydddYwfHNKcHh6ExqnHvrtBtACTPY3mArukM~iLxrsw3Y2J0Xbgf9ALYjnKy7c~opHETyUrBYoc5zyuDhmNoy7RyK93Lg__",
    artist: "Michael Jackson",
    album: "Off the Wall",
    duration: "4:13",
    playing: "158,040,045",
    url: RockWithYou,
  },
  {
    title: "Smooth Criminal - 2012 Remaster",
    imageURL:
      "https://s3-alpha-sig.figma.com/img/b185/465f/8a5d6c233b76e53e0eea65bc21738d6b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qH3AJdFHi9P8Ea1YFJ9bBmr5r3l1WoDlvy4fOT5ef5gb5EQCWhilvS9T7~MJfOL32t4AlzdZFNzo4MP0UhBc19-XgaEA2Of50DWBRsorH4t0Mu6GMHmff3fNpWjZviUTS5YncT3A8e9zus2172UQqe5JT2Xs9Y8axvhNBzClR5mdd8w8SYYrAgN-Vg-Q0j3y75x2m0GE3C5zwz~GXrRB3obwgEcWMfx~Ie2IxEVAyhYx8xpFgj1lIcQOQkbJF2yBOZa~rKhJmA9lXeiQaeWwq~IU0xZQoEqJ2Ws4aAeJnajwn-Ix6Wzyq7AC2-92CA-x~Vd~W5ddO9tOXDQsdzrjvg__",
    artist: "Michael Jackson",
    album: "Thriller 25 Super Deluxe Edition",
    duration: "4:17",
    playing: "148,745,045",
    url: SmoothCriminal,
  },
];
