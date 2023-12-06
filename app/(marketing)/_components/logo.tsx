import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        height={40}
        width={40}
        src="/logo.svg"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        height={40}
        width={40}
        src="/logo-dark.svg"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold, font.className")}>Jotion</p>
    </div>
  );
};
