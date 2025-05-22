import { Button } from "@/components/ui/button";
import { connectToDB } from "@/lib/mongo";
import { Article } from "@/models/Article";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ArticleViewPage({
  params,
}: {
  params: { id: string };
}) {
  await connectToDB();

  const article = (await Article.findById(params.id).lean()) as {
    title: string;
    author: string;
    createdAt: string;
    image: string;
    content: string;
  } | null;

  if (!article) return notFound();

  return (
    <div className="max-w-5xl mx-auto">
      {/* Image header block */}
      <div className="relative h-[25vh] md:h-[35vh] w-full overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
            {article.title}
          </h1>
          <div className="flex justify-between w-full text-sm md:text-base max-w-4xl px-4">
            <span>By {article.author}</span>
            <span>{new Date(article.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="px-4 md:px-8 py-10">
        <div
          className="prose prose-lg max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      <Link key="/dashboard/articole" href="/dashboard/articole">
        <Button
          type="submit"
          className="btn btn-primary w-full bg-[#387780] text-white hover:bg-[#387780bd] rounded-full p-3 mt-4"
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
}
