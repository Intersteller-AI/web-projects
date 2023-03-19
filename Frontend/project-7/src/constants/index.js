import {
  AiOutlineHistory,
  AiOutlineHome,
  AiOutlinePlaySquare,
  AiOutlineVideoCamera,
  AiOutlineLike,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { DiAtom } from "react-icons/di";
import { RxPlay } from "react-icons/rx";
import { TbBrandYoutubeKids } from "react-icons/tb";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import CodeIcon from "@mui/icons-material/Code";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const homeLinks = [
  { icon: AiOutlineHome, gotoPage: "/", alias: "New", name: "home" },
  { icon: TbBrandYoutubeKids, gotoPage: "/", alias: "shorts", name: "shorts" },
  {
    icon: AiOutlineVideoCamera,
    gotoPage: "/",
    alias: "subscriptions",
    name: "subscriptions",
  },
];

export const infoPages = [
  { icon: RxPlay, gotoPage: "/", name: "library" },
  { icon: AiOutlineHistory, gotoPage: "/", name: "history" },
  { icon: AiOutlinePlaySquare, gotoPage: "/", name: "your videos" },
  { icon: AiOutlineClockCircle, gotoPage: "/", name: "watch later" },
  { icon: AiOutlineLike, gotoPage: "/", name: "liked videos" },
];

export const categories = [
  { name: "Two Minute Papers", icon: DiAtom, gotoPage: "/Two Minute Papers" },
  { name: "Coding", icon: CodeIcon, gotoPage: "/Coding" },
  { name: "ReactJS", icon: CodeIcon, gotoPage: "/ReactJS" },
  { name: "NextJS", icon: CodeIcon, gotoPage: "/NextJS" },
  { name: "Music", icon: MusicNoteIcon, gotoPage: "/Music" },
  { name: "Education", icon: SchoolIcon, gotoPage: "/Education" },
  { name: "Podcast", icon: GraphicEqIcon, gotoPage: "/Podcast" },
  { name: "Movie", icon: OndemandVideoIcon, gotoPage: "/Movie" },
  { name: "Gaming", icon: SportsEsportsIcon, gotoPage: "/Gaming" },
  { name: "Live", icon: LiveTvIcon, gotoPage: "/Live" },
  { name: "Sport", icon: FitnessCenterIcon, gotoPage: "/Sport" },
  { name: "Fashion", icon: CheckroomIcon, gotoPage: "/Fashion" },
  { name: "Beauty", icon: FaceRetouchingNaturalIcon, gotoPage: "/Beauty" },
  { name: "Comedy", icon: TheaterComedyIcon, gotoPage: "/Comedy" },
  { name: "Gym", icon: FitnessCenterIcon, gotoPage: "/Gym" },
  { name: "Crypto", icon: DeveloperModeIcon, gotoPage: "/Crypto" },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "JavaScript Mastery";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
