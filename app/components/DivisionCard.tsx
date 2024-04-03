import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DivisionCard = ({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) => {
  return (
    <Card className="basis-full md:basis-2/3 min-h-72">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
        <Link href={href}>
          <Button variant={"link"} className="px-0">
            Learn more...
          </Button>
        </Link>
      </CardHeader>
    </Card>
  );
};

export default DivisionCard;
