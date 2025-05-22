import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    shortDescription: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Article =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);
