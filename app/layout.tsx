"use client";

import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  return (
    <html lang="en">
      <head>
        <Script
          id="gtag-manager"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="g-tag" strategy="lazyOnload">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
        </Script>
      </head>
      <body className="h-full w-full bg-[#1a1818]">
        <div className="flex navbar text-white py-2 text-sm font-[50] flex-col md:flex-row items-center md:px-6">
          <Image
            src="/images/skyash.jpeg"
            className="rounded-md hover:scale-110 transition-all"
            width={48}
            height={48}
            alt="icon"
          ></Image>
          <div className="flex w-full justify-between items-center flex-col md:flex-row">
            <div className="w-1/2 flex justify-evenly items-center cursor-pointer my-2">
              <span
                className={`${
                  currentPath == "/" ? "bg-gray-600 text-white" : ""
                } px-4 py-1 text-center rounded-md transition-all text-[#a2a2a2] hover:text-white border-none`}
              >
                <Link href="/">Home</Link>
              </span>
              <span
                className={`${
                  currentPath == "/work" ? "bg-gray-600 text-white" : ""
                } px-4 py-1 text-center rounded-md transition-all text-[#a2a2a2] hover:text-white border-none`}
              >
                <Link href="/work/">Work</Link>
              </span>
              <span
                className={`${
                  currentPath == "/blog/microblog-83d14"
                    ? "bg-gray-600 text-white"
                    : ""
                } px-4 py-1 text-center rounded-md transition-all text-[#a2a2a2] hover:text-white border-none`}
              >
                <Link href="/blog/microblog-83d14/">Microblog</Link>
              </span>
              <span
                className={`${
                  currentPath == "/blog/photographs-0e974"
                    ? "bg-gray-600  text-white"
                    : ""
                } px-4 py-1 text-center rounded-md transition-all text-[#a2a2a2] hover:text-white border-none`}
              >
                <Link href="/blog/photographs-0e974/">Photography</Link>
              </span>
            </div>
            <div className="">
              <span className="text-[#a2a2a2] cursor-default">
                elsewhere --{" "}
              </span>
              <span className="px-3 text-[#a2a2a2] cursor-pointer hover:">
                <Link href="https://www.x.com/champyash010/" target="_blank">
                  X
                </Link>
              </span>
              <span className="px-3 text-[#a2a2a2] cursor-pointer hover:">
                <Link href="https://www.github.com/CHAMP010/" target="_blank">
                  GitHub
                </Link>
              </span>
              <span className="px-3 text-[#a2a2a2] cursor-pointer hover:">
                <Link
                  href="https://www.linkedin.com/in/yash-soni-62b200237/"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </span>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
