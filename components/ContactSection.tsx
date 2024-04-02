import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { cable } from "@/assets";

const ContactSection = () => {
  return (
    <section className="w-full flex flex-col gap-12 px-1 md:px-12">
      <div className="relative w-full h-96 flex flex-col bg-black rounded-3xl justify-center items-center gap-6 overflow-hidden">
        <Image
          src={cable}
          alt=""
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="absolute w-full h-full bg-black/20"></div>
        <h2 className="relative text-6xl font-bold">Lets talk.</h2>
        <Link href={"mailto:soedirmanrobotic@gmail.com"}>
          <Button
            variant={"default"}
            size={"lg"}
            className="relative text-base px-12"
          >
            Get In Touch
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
