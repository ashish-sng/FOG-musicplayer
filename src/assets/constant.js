import { DiscoverIcon } from "../components/svgs/DiscoverIcon";
import { HomeIcon } from "../components/svgs/HomeIcon";
import { LibraryIcon } from "../components/svgs/LibraryIcon";
import { LogoutIcon } from "../components/svgs/Logout";
import { SettingsIcon } from "../components/svgs/Settings";
import { TrendIcon } from "../components/svgs/TrendIcon";

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
