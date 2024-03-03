"use client";

import { Metadata } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "skyash",
};

export default function Page() {
  const [blogItems, setBlogItems]:any = useState([]);

  useEffect(() => {
    async function fetchBlogs(){
      const res = await fetch(`${process.env.BASE_URL}/api/notion-api`)
    res.json().then((items)=>{
      setBlogItems(items)
    })
    }
    fetchBlogs()
  }, []);

  

  return (
    <div className="blogs text-white w-[90%] md:w-[36%] min-h-[100px] flex flex-col text-xs tracking-wider font-[530] overflow-y-scroll no-scrollbar">
      {blogItems.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Link
              href={`/blog/${item.slug}/`}
              className="flex flex-row items-center justify-between "
              
            >
              <span className="cursor-pointer hover:text-[#a2a2a2] transition-all pt-4 pb-2 px-1">
                {item.title}
              </span>
              <span className="text-[#a2a2a2] w-[160px] flex justify-end">
                {`${item.category} ~ ${item.year}`}
              </span>
            </Link>
            <hr className="opacity-20" />
          </div>
        );
      })}
    </div>
  );
}
