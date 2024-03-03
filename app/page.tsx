// "use client"

import Image from "next/image";
import Link from "next/link";
import Page from "./work/page";
import BlogsList from "@/components/BlogsList/BlogsList";

export default async function Home() {
  return (
    <div className="main h-full w-full">
      <div className="hero flex items-center flex-col">
        <div className="text-white flex flex-col my-6 py-6 w-[90%] md:w-[36%]">
          <span className="font-semibold text-xl py-2">Yash</span>
          <span className="text-[#a2a2a2] text-base font-light">
            jack of all trades and master of one! mostly revolving around
            technology, science and startups. in the loop of planning, building
            and shipping.
          </span>
        </div>
        <BlogsList></BlogsList>
        <div className="md:px-10">
          <Page></Page>
        </div>
      </div>
    </div>
  );
}
