import { connectToDB } from "@/lib/mongo";
import { Product } from "@/models/Product";
import ProductTable from "./ProductTable";

export default async function ProdusePage() {
  try {
    await connectToDB();
    const rawProducts = await Product.find().lean();

    const products = rawProducts.map((p) => ({
      ...p,
      _id: (p._id as { toString: () => string }).toString(),
      createdAt: p.createdAt?.toISOString?.(),
      updatedAt: p.updatedAt?.toISOString?.(),
    }));

    return <ProductTable products={products} />;
  } catch (error) {
    console.error("❌ Error în ProdusePage:", error);
    return (
      <div className="text-red-500 text-center p-6">
        Eroare la încărcarea produselor.
      </div>
    );
  }
}
