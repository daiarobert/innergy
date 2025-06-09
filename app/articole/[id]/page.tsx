import { getAllArticles, Articol } from "@/lib/articole";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";

export default async function ArticolPage({
  params,
}: {
  params: { id: string };
}) {
  const articole = await getAllArticles();

  const articol = articole.find((a) => a.id.toString() === params.id);
  const index = articole.findIndex((a) => a.id.toString() === params.id);

  const prev = articole[index - 1];
  const next = articole[index + 1];

  if (!articol) return <div className="p-10">Articolul nu a fost găsit.</div>;

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
      {/* 
        <div className="relative h-[300px] rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={articol.imagine}
            alt={articol.titlu}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center px-4">
              {articol.titlu}
            </h1>
          </div>
        </div> */}
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
            <Link href={`/articole/${prev.id}`} className="hover:underline">
              ← {prev.titlu}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/articole/${next.id}`} className="hover:underline">
              {next.titlu} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
