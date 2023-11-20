import { projects } from "@/constants/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "skyash",
};

export default function Page() {
  return (
    <div className="work text-white">
      <div className="head py-10 px-20 flex flex-col w-1/2">
        <span className="text-[1.6rem]">Highlights</span>
        <span className="opacity-60 py-2 font-[50] text-[0.95rem]">
          My work is deeply immersed in the fusing of technology and design.
          I've created products, brands and solutions for various organizations
          and passion projects for over five years. <br />
          <br /> My recent work includes tabX, a product I built, which aims at
          efficient and easy tab management. tabX is still progressing!
        </span>
      </div>
      <div className="projects h-full">
        {projects.map((project, index) => {
          return (
            <div className="flex flex-row h-full items-center">
              <div className="w-20 flex flex-col text-center">
                {project.tags.map((tag) => {
                  return (
                    <span className="my-8 -rotate-90 opacity-60 text-sm text-bold hover:opacity-80 cursor-pointer leading-10">
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div
                className="project px-14 py-12 flex flex-col w-1/2"
                key={index}
              >
                <Link
                  href={project.source ? project.source : ""}
                  className=" cursor-pointerpx-2 text-2xl font-medium py-3"
                >
                  {project.title}
                </Link>
                <span className="opacity-60 text-[0.98rem] font-[50] py-3">
                  {project.description}
                </span>
                <Image
                  src={project.image}
                  alt="project"
                  width={500}
                  height={250}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
