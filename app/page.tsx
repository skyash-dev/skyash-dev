import Image from "next/image";
import Link from "next/link";
import { getPages } from "@/utils/notion";

export default async function Home() {
  const pages = await getPages();
  let blogItems: any = [];
  pages.map((page: any) => {
    if (page.properties.Category["select"]["name"] !== "Photos") {
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
    <div className="main h-full w-full ">
      <div className="hero flex items-center flex-col">
        <div className="text-white flex flex-col my-6 py-6 w-[36%]">
          <span className="font-semibold text-xl py-2">Yash</span>
          <span className="opacity-70 text-base">
            jack of all trades and master of one! mostly revolving around
            technology, science and startups. in the loop of planning, building
            and shipping.
          </span>
        </div>
        <div className="blogs text-white w-[36%] h-[340px] flex flex-col text-xs tracking-wider font-[530] overflow-y-scroll no-scrollbar">
          {blogItems.map((item: any, index: number) => {
            return (
              <>
                <Link
                  href={`/blog/${item.slug}/`}
                  className="flex flex-row items-center justify-between "
                  key={index}
                >
                  <span className="opacity-100 cursor-pointer hover:opacity-60 transition-all pt-4 pb-2 px-1">
                    {item.title}
                  </span>
                  <span className="opacity-60">
                    {`${item.category} ~ ${item.year}`}
                  </span>
                </Link>
                <hr className="opacity-20" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
