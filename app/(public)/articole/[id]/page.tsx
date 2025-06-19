import { getAllArticles, Articol } from "@/lib/articole";
import Hero from "@/components/Hero";
import Image from "next/image";

export default async function ArticolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params; // Await the params
  const articolId = resolvedParams.id;

  const articole = await getAllArticles();
  const articol = articole.find((a) => a.id.toString() === articolId);
  const index = articole.findIndex((a) => a.id.toString() === articolId);

  const prev = articole[index - 1] || null;
  const next = articole[index + 1] || null;

  if (!articol) {
    return <div className="p-10">Articolul nu a fost găsit.</div>;
  }

  return (
    <div>
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: articol.imagine,
        }}
        text={articol.titlu}
      />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="prose prose-lg max-w-none mb-10 relative">
          <div className="absolute text-[120px] -top-20 -left-6 text-gray-200 select-none font-serif">
            “
          </div>
          <p>{articol.descriere}</p>
          <div className="absolute text-[120px] -bottom-20 right-0 text-gray-200 select-none font-serif">
            ”
          </div>
        </div>

        <div className="flex justify-between border-t pt-6 mt-10 text-blue-600 font-medium">
          {prev ? (
            <a href={`/articole/${prev.id}`} className="hover:underline">
              ← {prev.titlu}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a href={`/articole/${next.id}`} className="hover:underline">
              {next.titlu} →
            </a>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
