import { connectToDB } from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

// GET - pentru afișarea produselor
export async function GET() {
  try {
    await connectToDB();
    const rawProducts = (await Product.find().lean()) as Array<{
      _id: any;
      createdAt?: Date;
      updatedAt?: Date;
      [key: string]: any;
    }>;

    const products = rawProducts.map((p) => ({
      ...p,
      _id: p._id.toString(),
      createdAt: p.createdAt?.toISOString?.(),
      updatedAt: p.updatedAt?.toISOString?.(),
    }));

    return NextResponse.json(products);
  } catch (err) {
    console.error("❌ Eroare în GET produse:", err);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST - pentru crearea unui produs nou
export async function POST(req: Request) {
  try {
    await connectToDB();
    const body = await req.json();
    const newProduct = await Product.create(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
