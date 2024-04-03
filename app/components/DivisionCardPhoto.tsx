import React from "react";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

const DivisionCardPhoto = ({
  image,
}: {
  direction: string;
  image: StaticImageData;
}) => {
  return (
    <Card className="relative basis-full md:basis-1/3 h-72 bg-foreground overflow-hidden">
      <Image src={image} alt="" className="w-full h-full object-cover" />
      <div className={`absolute top-0 left-0 w-full h-full bg-black/20`}></div>
    </Card>
  );
};

export default DivisionCardPhoto;
