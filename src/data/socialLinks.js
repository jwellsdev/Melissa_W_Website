import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@melireadsitall",
    description: "Long-form videos, tutorials, and deep dives.",
    type: "youtube",
    thumbnailUrl: "src/assets/images/ytThumbNail.jpg",
    // videoId: "PL_0b0d2KXLE3wHL66SoETwsJzfIzJf2bY",
    icon: faYoutube,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@melireadsitall",
    description: "Short clips, quick tips, and behind-the-scenes.",
    type: "external",
    thumbnailUrl: "src/assets/images/tiktokThumbNail.jpg",
    // embedUrl:
    //   "https://www.tiktok.com/@melireadsitall/video/7457546679298870574?is_from_webapp=1&sender_device=pc&web_id=7579314659984803341",
    icon: faTiktok,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/melireadsitall/",
    description: "Photos, reels, and daily updates.",
    type: "external",
    thumbnailUrl: "src/assets/images/igThumbNail.jpg",
    // embedUrl:
    //   "https://www.instagram.com/reel/DQqF-IQjsfR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    icon: faInstagram,
  },
];
