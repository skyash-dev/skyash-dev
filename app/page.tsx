import Image from "next/image";
import Link from "next/link";
import { getPages } from "@/utils/notion";
import Page from "./work/page";

export default async function Home() {
  let blogItems: any = [];
  const pages = await getPages();
  pages.map((page: any) => {
    if (
      page.properties.Category["select"]["name"] !== "Photos" &&
      page.properties.Category["select"]["name"] !== "Work"
    ) {
      const blogItem = {
        title: page.properties.Title["title"][0]["plain_text"],
        category: page.properties.Category["select"]["name"],
        year: new Date(
          page.properties["Created Date"]["created_time"]
        ).getFullYear(),
        slug: page.properties["Slug"]["formula"]["string"],
        // slug: page.properties["Slug"]["rich_text"][0]["plain_text"],
      };
      blogItems.push(blogItem);
    }
  });
  return (
    <div className="main h-full w-full text-base">
      <div className="hero flex items-center flex-col">
        <div className="text-white flex flex-col my-6 py-6 w-[90%] md:w-[36%]">
          <span className="font-semibold text-xl py-2">Yash</span>
          <span className="text-[#a2a2a2] text-base font-light">
            jack of all trades and master of one! mostly revolving around
            technology, science and startups. in the loop of planning, building
            and shipping.
          </span>
        </div>
        <div className="blogs text-white w-[90%] md:w-[36%] min-h-[100px] flex flex-col text-xs tracking-wider font-[530] overflow-y-scroll no-scrollbar">
          {blogItems.map((item: any, index: number) => {
            return (
              <>
                <Link
                  href={`/blog/${item.slug}/`}
                  className="flex flex-row items-center justify-between "
                  key={index}
                >
                  <span className="cursor-pointer hover:text-[#a2a2a2] transition-all pt-4 pb-2 px-1">
                    {item.title}
                  </span>
                  <span className="text-[#a2a2a2] w-[160px] flex justify-end">
                    {`${item.category} ~ ${item.year}`}
                  </span>
                </Link>
                <hr className="opacity-20" />
              </>
            );
          })}
        </div>
        <div className="md:px-10">
          <Page></Page>
        </div>
      </div>
    </div>
  );
}
