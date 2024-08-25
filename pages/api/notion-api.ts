import type { NextApiRequest, NextApiResponse } from "next";
import { getPages } from "@/utils/notion";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  let blogItems: any = [];
  const pages = await getPages();
  pages.map((page: any) => {
    if (page.properties.Category.select.name !== "Photos") {
      const blogItem = {
        icon: page.icon,
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

  res.status(200).json(blogItems);
}
