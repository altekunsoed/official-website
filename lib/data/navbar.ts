export const navMenu: {
  title: string;
  contents?: {
    title: string;
    description?: string;
    href: string;
    spotlight?: boolean;
  }[];
  href?: string;
}[] = [
  {
    title: "About Us",
    contents: [
      {
        title: "Aliansi Laboratorium Teknik Elektro",
        description: "Get to know more about us.",
        href: "/about",
        spotlight: true,
      },
      {
        title: "Humkominfo",
        description: "Get to know people behind our organization.",
        href: "/about/humkominfo",
      },
      {
        title: "Teknik Tenaga Listrik",
        description: "Get to know people behind our Robotic Teams.",
        href: "/about/ttl",
      },
      {
        title: "Teknik Telekomunikasi",
        description: "Get to know people behind our UAV Teams.",
        href: "/about/ttl",
      },
      {
        title: "Teknik Komputer Informasi",
        description: "Get to know people behind our Robotic Teams.",
        href: "/about/ttl",
      },
      {
        title: "Teknik Instrumentasi Kendali",
        description: "Get to know people behind our UAV Teams.",
        href: "/about/ttl",
      },
    ],
  },
  {
    title: "Resource & Media",
    contents: [
      {
        title: "Konten Edukasi",
        description: "Check out our stories on Medium.",
        href: "https://medium.com/@soedirmanrobotic",
      },
      {
        title: "E-Magazine",
        description:
          "Get up to date about latest technology via our E-Magazine.",
        href: "/e-magazine",
      },
      {
        title: "YouTube",
        description:
          "Get to know more about our organization achievements and history!",
        href: "https://www.youtube.com/@soedirmanroboticteam",
      },
      {
        title: "Cast-Tic",
        description:
          "Don't have time to learn new things? Listen to our podcast and learn something new while still being able to do what you do.",
        href: "https://open.spotify.com/show/49Nhx2wMSNFfZfC64O7Wmm?si=c6e1ff41fd814cc5",
      },
      {
        title: "TikTok",
        description:
          "Learning doesn't have to be boring! Have fun while learning new things with our TikTok videos.",
        href: "https://www.tiktok.com/@srtunsoed",
      },
    ],
  },
  {
    title: "Recruitments",
    contents: [
      {
        title: "Open Recruitment",
        description:
          "Are you ready to be the next fighters? Don't miss out our opening for new recruits! ",
        href: "https://join.soedirmanrobotic.com",
      },
      {
        title: "Assistant Recruitment",
        description:
          "Follow our Instagram and get notified about our Internship program!",
        href: "/internship",
      },
    ],
  },
];
