"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ViewArticlePage() {
  const params = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`/api/articole/${params.id}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error("Failed to fetch article", err);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) fetchArticle();
  }, [params.id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="/floare.svg"
          alt="Loading..."
          className="w-20 h-20 animate-spin"
        />
      </div>
    );

  if (!article?._id)
    return <p className="p-4 text-error">Articolul nu a fost găsit</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header imagine */}
      <div className="relative h-[25vh] md:h-[35vh] w-full overflow-hidden mb-6">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-2">
            {article.title}
          </h1>
          <div className="text-sm md:text-base text-center">
            <p>{article.author}</p>
            <p>{new Date(article.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Conținut articol */}
      <div
        className="prose prose-lg max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Buton Go back */}
      <Link key="/dashboard/articole" href="/dashboard/articole">
        <Button
          type="button"
          className="btn btn-primary w-full bg-[#387780] text-white hover:bg-[#387780bd] rounded-full p-3 mt-10"
        >
          Înapoi
        </Button>
      </Link>
    </div>
  );
}
