import { humkominfo, tik, tki, ttk, ttl } from "@/assets/divisions";
import { StaticImageData } from "next/image";

export const divisionSection: {
  title: string;
  desc: string;
} = {
  title: "Our Team",
  desc: "We're a group of students with ambitions to be the winner of Kontes Robot Indonesia (KRI) and Kontes Robot Terbang Indonesia (KRTI). We will always strike through for “The Future We Make, For The Better Life”.",
};

export const ourDivisions: {
  title: string;
  desc: string;
  href: string;
  image: StaticImageData;
  direction: "forward" | "backward";
}[] = [
  {
    title: "Humkominfo",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    href: "/about/humkominfo",
    image: humkominfo,
    direction: "forward",
  },
  {
    title: "Teknik Tenaga Listrik",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    href: "/about/ttl",
    image: ttl,
    direction: "forward",
  },
  {
    title: "Teknik Telekomunikasi",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    href: "/about/ttk",
    image: ttk,
    direction: "forward",
  },
  {
    title: "Teknik Komputer Informasi",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    href: "/about/tki",
    image: tki,
    direction: "forward",
  },
  {
    title: "Teknik Instrumentasi Kendali",
    desc: "Our representative for the Fixed Wing (FW) division of Kontes Robot Terbang Indonesia (KRTI).",
    href: "/about/tik",
    image: tik,
    direction: "forward",
  },
];
