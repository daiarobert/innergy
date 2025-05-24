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

type RouteContext = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, context: RouteContext) {
  const { id } = context.params;
  await connectToDB();

  if (!mongoose.Types.ObjectId.isValid(id)) {
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

export async function PUT(req: NextRequest, context: RouteContext) {
  const { id } = context.params;
  await connectToDB();
  const body = await req.json();

  const updated = await Article.findByIdAndUpdate(id, body, { new: true });
  if (!updated)
    return NextResponse.json({ error: "Update failed" }, { status: 404 });

  return NextResponse.json({
    message: "Article updated",
    article: updated,
  });
}

export async function DELETE(req: NextRequest, context: RouteContext) {
  const { id } = context.params;
  await connectToDB();
  const deleted = await Article.findByIdAndDelete(id);
  if (!deleted)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ message: "Article deleted" });
}
