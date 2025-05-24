"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArticleViewPage() {
  const params = useParams();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`/api/articole/${params.id}`);
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error("Eroare la fetch articol:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) fetchArticle();
  }, [params.id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="/floare.svg"
          alt="loading"
          className="w-20 h-20 animate-spin"
        />
      </div>
    );

  if (!article)
    return <p className="p-4 text-red-500">Articolul nu a fost găsit.</p>;

  return (
    <div className="max-w-5xl mx-auto">
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

      <div className="px-4 md:px-8 py-10">
        <div
          className="prose prose-lg max-w-none mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      <Link href="/dashboard/articole">
        <Button className="w-full bg-[#387780] text-white hover:bg-[#387780bd] rounded-full p-3 mt-4">
          Înapoi
        </Button>
      </Link>
    </div>
  );
}
