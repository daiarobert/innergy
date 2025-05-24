import { connectToDB } from "@/lib/mongo";
import { Product } from "@/models/Product";
import ProductTable from "./ProductTable";

export default async function ProdusePage() {
  await connectToDB();

  const rawProducts = (await Product.find().lean()) as Array<{
    _id: any;
    createdAt?: Date;
    updatedAt?: Date;
  }>;

  const products = rawProducts.map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt?.toISOString?.(),
    updatedAt: p.updatedAt?.toISOString?.(),
  }));

  return <ProductTable products={products} />;
}
