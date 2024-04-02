import Link from "next/link";
import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { TextualLogo } from "@/assets";
import AuthButton from "@/components/AuthButton";

export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 bg-background w-full border-b md:border-0">
      <div className="w-full flex-col md:flex-row px-6 md:px-16 py-2 border-b border-border justify-between items-center flex">
        <div className="w-full md:w-fit flex flex-row items-center justify-between py-2 md:py-3 md:gap-8 md:flex">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <TextualLogo height={24} />
          </Link>

          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <NavigationMenuDesktop />
          </div>
        </div>
        <AuthButton />
      </div>
    </nav>
  );
}
