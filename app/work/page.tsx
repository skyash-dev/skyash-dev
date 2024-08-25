import { projects } from "@/constants/constants";
// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "skyash",
// };

export default async function Page() {
  return (
    <div className="work text-white flex flex-col items-center">
      <div className="head py-10 md:px-20 px-8 flex flex-col md:w-1/2 w-full">
        <span className="text-[1.6rem]">Highlights</span>
        <span className="text-[#a2a2a2] py-2 font-[50] text-[0.95rem]">
          My work is deeply immersed in the fusion of technology and design.
          I've created products, brands and solutions for various organizations
          and passion projects for over five years. <br />
          <br /> My recent work includes tabX, a product I built, which aims at
          efficient and easy tab management. tabX is still progressing!
        </span>
      </div>
      <div className="projects h-full">
        {projects.map((project, index) => {
          return (
            <div
              className="flex flex-row h-full justify-center items-center"
              key={index}
            >
              <div
                className="project pl-4 pr-6 md:px-14 py-12 flex md:w-1/2"
                key={index}
              >
                <span className="text-[#a2a2a2] text-sm text-bold hover:text-[#a2a2a2] cursor-pointer leading-10 py-3 px-2">
                  {project.year}
                </span>
                <div className="flex flex-col">
                  <Link
                    href={project.visit ? project.visit : ""}
                    className=" cursor-pointer px-2 text-2xl font-medium py-3"
                  >
                    {project.title}
                  </Link>
                  <span className="text-[#a2a2a2] text-[0.98rem] font-[50] py-3">
                    {project.description}
                  </span>
                  <Image
                    className="w-60 rounded-md"
                    src={project.image}
                    alt="project"
                    width={500}
                    height={250}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
