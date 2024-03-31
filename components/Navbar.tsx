import Link from "next/link";
import { NavigationMenuDesktop } from "./NavigationMenuDesktop";
import { TextualLogo } from "@/assets";
import AuthButton from "@/components/AuthButton";

export default function Navbar() {
  return (
    <nav className="sticky z-50 top-0 bg-background w-full border-b md:border-0">
      <div className="w-full flex-col md:flex-row px-6 md:px-16 py-2 border-b border-border justify-between items-center flex">
        <div className="w-full md:w-fit flex items-center justify-between py-2 md:py-3 md:block">
          <Link href="/" className="flex items-center gap-2 text-foreground">
            <TextualLogo height={36} />
          </Link>
        </div>
        <div
          className={`w-full pb-3 mt-8 flex flex-col md:flex md:flex-row md:flex-1 md:justify-between md:gap-2 md:pb-0 md:mt-0 gap-y-4`}
        >
          <div className="hidden md:flex md:flex-1 md:justify-center md:items-center">
            <NavigationMenuDesktop />
          </div>

          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
