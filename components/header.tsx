import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import HeaderLink from "./header-link";

export const Header = ({ name }: { name: string }) => {
  const firstName = name.split(" ")[0];

  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <div className="flex flex-row gap-3">
          <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
          <h1 className="text-2xl font-semibold text-white">Bookit</h1>
        </div>
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <HeaderLink href="/" label="Home" />
        <HeaderLink href="/search" label="Search" />
        <li>
          <Link href="/" className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback className="bg-amber-100">
                {getInitials(name || "IN")}
              </AvatarFallback>
            </Avatar>
            <p className="text-light-100 font-semibold">{firstName}</p>
          </Link>
        </li>
        <li>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
            <button className="text-destructive">
              <LogOut size={20} />
            </button>
          </form>
        </li>
      </ul>
    </header>
  );
};
