import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { divisionSection, ourDivisions } from "@/lib/division";
import DivisionCard from "@/components/DivisionCard";
import DivisionCardPhoto from "@/components/DivisionCardPhoto";
import Link from "next/link";

const DivisionSection = () => {
  return (
    <section className="flex w-full px-4 md:px-10 py-8 md:py-20 flex-col justify-center items-start gap-12">
      <div className="md:px-12">
        <SectionTitle
          title={divisionSection.title}
          desc={divisionSection.desc}
        />
      </div>
      <div className="self-stretch justify-start items-start flex md:px-12">
        <div className="w-full grow shrink basis-1 flex-col justify-start items-start gap-8 flex">
          {ourDivisions.map((division, index) => (
            <div
              className="w-full flex flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-center md:justify-between gap-2 md:gap-8"
              key={index}
            >
              <DivisionCard
                title={division.title}
                desc={division.desc}
                href={division.href}
                key={division.title}
              />
              <DivisionCardPhoto
                direction={division.direction}
                image={division.image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="self-stretch justify-center items-start inline-flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <Link href={"/about"}>
            <Button variant={"outline"} size={"xl"} className="max-w-full">
              Our Full Structure
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DivisionSection;
