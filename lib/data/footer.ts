import { unsoedVector } from "@/assets";
import { StaticImageData } from "next/image";
import { InstagramLogo, LinkedinLogo, YoutubeLogo } from "@/assets/socials";

export const footDesc: {
  desc: string;
  email: string;
} = {
  desc: "We're a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI). We will always strike through for “The Future We Make, For The Better Life”.",
  email: "soedirmanrobotic@gmail.com",
};

export const footSponsors: {
  title: string;
  href: string;
  src: StaticImageData;
  height?: number;
}[] = [
  {
    title: "Universitas Jenderal Soedirman",
    href: "https://unsoed.ac.id",
    src: unsoedVector,
  },
];

export const footSocials: {
  title: string;
  href: string;
  logo: React.JSX.Element;
}[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/srtunsoed/",
    logo: InstagramLogo({ height: 25 }),
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@soedirmanroboticteam",
    logo: YoutubeLogo({ height: 20 }),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/soedirman-robotic-team/",
    logo: LinkedinLogo({ height: 25 }),
  },
];
