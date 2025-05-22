import { connectToDB } from "@/lib/mongo";
import { Article } from "@/models/Article";
import { NextResponse } from "next/server";

// GET all articles
export async function GET() {
  await connectToDB();
  const articles = await Article.find().sort({ createdAt: -1 }).lean();

  const plain = articles.map((a: any) => ({
    ...a,
    _id: a._id.toString(),
    createdAt: a.createdAt?.toISOString(),
    updatedAt: a.updatedAt?.toISOString(),
  }));

  return NextResponse.json(plain);
}

// POST create article
export async function POST(req: Request) {
  await connectToDB();
  const body = await req.json();

  const article = await Article.create(body);
  return NextResponse.json(
    {
      message: "Article created",
      article,
    },
    { status: 201 }
  );
}
