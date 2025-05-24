import { connectToDB } from "@/lib/mongo";
import { Article } from "@/models/Article";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

interface IArticle {
  _id: string;
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// GET one article
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDB();

  if (!mongoose.Types.ObjectId.isValid(params.id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const article = (await Article.findById(params.id).lean()) as IArticle | null;
  if (!article)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({
    ...article,
    _id: article._id.toString(),
    createdAt: article.createdAt?.toISOString(),
    updatedAt: article.updatedAt?.toISOString(),
  });
}

// PUT update article
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  const body = await req.json();

  const updated = await Article.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  if (!updated)
    return NextResponse.json({ error: "Update failed" }, { status: 404 });

  return NextResponse.json({
    message: "Article updated",
    article: updated,
  });
}

// DELETE article
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDB();
  const deleted = await Article.findByIdAndDelete(params.id);
  if (!deleted)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ message: "Article deleted" });
}
