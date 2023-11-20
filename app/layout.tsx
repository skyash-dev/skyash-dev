"use client";

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  return (
    <html lang="en">
      <body className="h-full w-full bg-[#1a1818]">
        <div className="navbar text-white py-2 flex items-center justify-between text-sm font-[50]">
          <div className="w-1/2 flex justify-evenly items-center cursor-pointer">
            <span>
              <Image
                src="/images/skyash.jpeg"
                className="rounded-md hover:scale-110 transition-all"
                width={48}
                height={48}
                alt="icon"
              ></Image>
            </span>
            <span
              className={`${
                currentPath == "/" ? "bg-gray-600 opacity-80" : ""
              } px-4 py-1 text-center rounded-md transition-all opacity-60 hover:opacity-80 border-none`}
            >
              <Link href="/">home</Link>
            </span>
            <span
              className={`${
                currentPath == "/work" ? "bg-gray-600 opacity-80" : ""
              } px-4 py-1 text-center rounded-md transition-all opacity-60 hover:opacity-80 border-none`}
            >
              <Link href="/work/">work</Link>
            </span>
            <span
              className={`${
                currentPath == "/blog/microblog-83d14"
                  ? "bg-gray-600 opacity-80"
                  : ""
              } px-4 py-1 text-center rounded-md transition-all opacity-60 hover:opacity-80 border-none`}
            >
              <Link href="/blog/microblog-83d14/">microblog</Link>
            </span>
            <span
              className={`${
                currentPath == "/blog/photographs-0e974"
                  ? "bg-gray-600  opacity-80"
                  : ""
              } px-4 py-1 text-center rounded-md transition-all opacity-60 hover:opacity-80 border-none`}
            >
              <Link href="/blog/photographs-0e974/">photography</Link>
            </span>
          </div>
          <div>
            <span className="opacity-60 cursor-default">elsewhere -- </span>
            <span className="px-3 opacity-60 cursor-pointer hover:opacity-100">
              <Link href="https://www.x.com/champyash010/" target="_blank">
                x
              </Link>
            </span>
            <span className="px-3 opacity-60 cursor-pointer hover:opacity-100">
              <Link href="https://www.github.com/CHAMP010/" target="_blank">
                github
              </Link>
            </span>
            <span className="px-3 opacity-60 cursor-pointer hover:opacity-100">
              <Link
                href="https://www.linkedin.com/in/yash-soni-62b200237/"
                target="_blank"
              >
                linkedin
              </Link>
            </span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
