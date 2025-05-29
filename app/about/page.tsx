// filepath: /c:/Users/daiar/Desktop/innergy/your-project-name/app/produse/page.tsx
import Hero from "@/components/Hero";

export default function ProdusePage() {
  return (
    <>
      <Hero
        height="35vh"
        media={{
          type: "image",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEBEEe8oSCB3-ow24MC3RAbFF2ZmBr6hi7w&s",
        }}
        text="produse"
      />
      <main className="min-h-screen bg-gray-100 text-black">
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold mb-8">Produse</h1>
          <p className="text-lg">
            Welcome to the Produse page! Here you can explore our products.
          </p>
        </div>
      </main>
    </>
  );
}
