import { connectToDB } from "@/lib/mongo";
import { Product } from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

// GET one product
export async function GET(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const product = await Product.findById(id).lean();

  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}

// PUT update product
export async function PUT(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const data = await req.json();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const updated = await Product.findByIdAndUpdate(id, data, {
    new: true,
  });

  if (!updated) {
    return NextResponse.json({ error: "Update failed" }, { status: 404 });
  }

  return NextResponse.json(updated);
}

// DELETE product
export async function DELETE(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Product.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(deleted);
}
