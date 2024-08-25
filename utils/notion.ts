import "server-only";
import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionAPI } from "notion-client";

export const api = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2,
});

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages: any = () => {
  return notionClient.databases
    .query({
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
      database_id: process.env.NOTION_DATABASE_ID!,
    })
    .then((res: any) => res.results as any);
};

export const getPageContent = (pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res: any) => res.results as BlockObjectResponse[]);
};

export const getPageBySlug = (slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Slug",
        formula: {
          string: {
            contains: slug,
          },
        },
      },
    })
    .then((res: any) => res.results[0] as PageObjectResponse);
};
