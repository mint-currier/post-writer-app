import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import Link from "next/link";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  useLockBodyScroll();

  return (
    <div className="fixed top-16 inset-0 z-5-0 p-6 shadow-md md:hidden animate-in slide-in-from-top-10">
      <div className="grid gap-6 bg-white p-4 text-popover-foreground shadow-md">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="test-sm flex gap-4">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
