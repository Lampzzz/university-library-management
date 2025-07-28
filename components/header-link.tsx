"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const HeaderLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href}>
        <p className={cn(isActive ? "text-primary" : "text-light-100")}>
          {label}
        </p>
      </Link>
    </li>
  );
};

export default HeaderLink;
