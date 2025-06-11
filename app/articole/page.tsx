import Link from "next/link";
import Hero from "@/components/Hero";
import { getAllArticles } from "@/lib/articole";
import Image from "next/image";

export default async function ArticolePage() {
  const articole = await getAllArticles();

  return (
    <>
      <Hero
        height="60vh"
        media={{
          type: "image",
          src: "https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg",
        }}
        text="Articole"
      />

      <section className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Ultimele articole
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articole.map((articol) => (
            <Link
              key={articol.id}
              href={`/articole/${articol.id}`}
              className="group rounded-xl overflow-hidden border hover:shadow-lg transition bg-white"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={articol.imagine}
                  alt={articol.titlu}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1">{articol.titlu}</h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {articol.descriere}
                </p>
                <div className="text-xs text-gray-400">
                  {articol.autor} •{" "}
                  {new Date(articol.data).toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
