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
];

// export const infoPages = [
//   { icon: RxPlay, gotoPage: "/", name: "library" },
//   { icon: AiOutlineHistory, gotoPage: "/", name: "history" },
//   { icon: AiOutlinePlaySquare, gotoPage: "/", name: "your videos" },
//   { icon: AiOutlineClockCircle, gotoPage: "/", name: "watch later" },
//   { icon: AiOutlineLike, gotoPage: "/", name: "liked videos" },
// ];

export const categories = [
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

export const subscriptions = [
  { name: "Two Minute Papers", icon: 'https://yt3.ggpht.com/ytc/AL5GRJVHdRWdg2DCg9E3slZe6xEgPuyH2rFypTsns-EtDA=s800-c-k-c0x00ffffff-no-rj', gotoPage: "/Two Minute Papers" },
  { name: "FreeCodeCamp", icon: 'https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s800-c-k-c0x00ffffff-no-rj', gotoPage: "/FreeCodeCamp" },
  { name: "Think School", icon: 'https://yt3.ggpht.com/nTK6AFZrpjDHKNIHq0zqjkWCs3jm9ttQBAGOfIui0zlz_gQzeqAIOtQKfzbSUIA0Mu15HBDfCg=s800-c-k-c0x00ffffff-no-rj', gotoPage: "/Think School" },
  { name: "Fireship", icon: 'https://yt3.ggpht.com/ytc/AL5GRJUEZDXANi-9AD9yJzNTU1R0_cA1Brd6nLXLZaG31g=s68-c-k-c0x00ffffff-no-rj', gotoPage: "/Fireship" },
  { name: "JavaScript Mastery", icon: 'https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0x00ffffff-no-rj', gotoPage: "/Two Minute Papers" },
];

export const demoThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";
export const demoChannelUrl = "/channel/UCmXmlB4-HJytD7wek0Uo97A";
export const demoVideoUrl = "/video/GDa8kZLNhJ4";
export const demoChannelTitle = "channel name";
export const demoVideoTitle =
  "Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI";
export const demoProfilePicture =
  "http://dergipark.org.tr/assets/app/images/buddy_sample.png";
