import { connectToDB } from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await connectToDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const product = await Product.findById(params.id).lean();

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  const data = await req.json();

  const updated = await Product.findByIdAndUpdate(params.id, data, {
    new: true,
  });

  return NextResponse.json(updated);
}
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  const deleted = await Product.findByIdAndDelete(params.id);
  return NextResponse.json(deleted);
}
