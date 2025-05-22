"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";

// Dynamically import FroalaEditor with `ssr: false`
const FroalaEditor = dynamic(
  async () => {
    const FroalaEditor = (await import("react-froala-wysiwyg")).default;
    await import("froala-editor/js/plugins.pkgd.min.js");
    await import("froala-editor/css/froala_editor.pkgd.min.css");
    await import("froala-editor/css/froala_style.min.css");
    await import("froala-editor/css/themes/gray.min.css");
    await import("froala-editor/css/plugins/image.min.css");
    await import("font-awesome/css/font-awesome.css");
    return FroalaEditor;
  },
  { ssr: false }
);

const schema = z.object({
  title: z.string().min(1),
  shortDescription: z.string().min(10),
  author: z.string().min(1),
  image: z.string().url(),
});

export default function NewArticlePage() {
  const router = useRouter();
  const [content, setContent] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const payload = {
      ...data,
      content,
      published: true,
    };

    const res = await fetch("/api/articole", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/dashboard/articole");
    }
  };

  return (
    <Card className="max-w-xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-center">Create New Article</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input {...register("title")} />
            {errors.title && (
              <p className="text-error text-sm">
                {errors.title.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Short Description</Label>
            <Input {...register("shortDescription")} />
            {errors.shortDescription && (
              <p className="text-error text-sm">
                {errors.shortDescription.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Author</Label>
            <Input {...register("author")} />
            {errors.author && (
              <p className="text-error text-sm">
                {errors.author.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Image URL</Label>
            <Input type="url" {...register("image")} />
            {errors.image && (
              <p className="text-error text-sm">
                {errors.image.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Content</Label>
            <div className="bg-white border rounded">
              <FroalaEditor
                model={content}
                onModelChange={(val: string) => setContent(val)}
                tag="textarea"
                config={{
                  theme: "gray",
                  imageUpload: true,
                  imageUploadURL: "/api/upload",
                  imageUploadParam: "file",
                  imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
                  imageDefaultWidth: 0,
                  heightMin: 250,
                  placeholderText: "Write your article content here...",
                }}
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full bg-[#387780] text-white hover:bg-[#387780bd] rounded-full p-3"
          >
            {isSubmitting ? "Saving..." : "Create"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
