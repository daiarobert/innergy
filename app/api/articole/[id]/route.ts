import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongo";
import { Article } from "@/models/Article";
import mongoose from "mongoose";

interface IArticle {
  _id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// GET one article
export async function GET(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const article = (await Article.findById(id).lean()) as IArticle | null;
  if (!article)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({
    ...article,
    _id: article._id.toString(),
    createdAt: article.createdAt?.toISOString(),
    updatedAt: article.updatedAt?.toISOString(),
  });
}

// PUT
export async function PUT(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  const body = await req.json();

  if (!id) return NextResponse.json({ error: "Missing ID" }, { status: 400 });

  const updated = await Article.findByIdAndUpdate(id, body, { new: true });
  if (!updated)
    return NextResponse.json({ error: "Update failed" }, { status: 404 });

  return NextResponse.json({
    message: "Article updated",
    article: updated,
  });
}

// DELETE
export async function DELETE(req: NextRequest) {
  await connectToDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Article.findByIdAndDelete(id);
  if (!deleted)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ message: "Article deleted" });
}
