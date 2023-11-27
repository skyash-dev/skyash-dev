import { notFound } from "next/navigation";
import { api, getPageBySlug } from "@/utils/notion";
import NotionPage from "@/components/NotionPage/NotionPage";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPageBySlug(params.slug);
  if (!post) {
    console.log("not found!");
    notFound();
  }

  const recordMap = await api.getPage(post.id);

  return (
    <div className="blog my-6">
      <NotionPage
        recordMap={recordMap}
        isCollection={
          params.slug !== "photographs-0e974" &&
          params.slug !== "microblog-83d14"
            ? true
            : false
        }
      />
    </div>
  );
}
