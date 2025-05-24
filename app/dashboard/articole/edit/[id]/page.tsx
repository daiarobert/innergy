"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import React from "react";

// Load Froala dynamically
const FroalaEditor = dynamic(() => import("react-froala-wysiwyg"), {
  ssr: false,
});

const schema = z.object({
  title: z.string().min(1),
  shortDescription: z.string().min(10),
  author: z.string().min(1),
  image: z.string().url(),
});

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const [content, setContent] = useState("");
  const [defaultValues, setDefaultValues] = useState<any>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    // 🧠 Lazy load Froala CSS only in browser
    if (typeof window !== "undefined") {
      import("froala-editor/js/plugins.pkgd.min.js");
      import("froala-editor/css/froala_editor.pkgd.min.css");
      import("froala-editor/css/froala_style.min.css");
      import("froala-editor/css/themes/gray.min.css");
      // import("font-awesome/css/font-awesome.css");
    }
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`/api/articole/${params.id}`);
      const data = await res.json();
      setDefaultValues(data);
      reset({
        title: data.title,
        shortDescription: data.shortDescription,
        author: data.author,
        image: data.image,
      });
      setContent(data.content);
    };
    if (params.id) fetchArticle();
  }, [params.id, reset]);

  const onSubmit = async (data: any) => {
    const payload = { ...data, content };
    const res = await fetch(`/api/articole/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push("/dashboard/articole");
    }
  };

  if (!defaultValues)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="/floare.svg"
          alt="Loading..."
          className="w-20 h-20 animate-spin"
        />
      </div>
    );

  return (
    <Card className="max-w-xl mx-auto bg-white">
      <CardHeader>
        <CardTitle>Editează articol</CardTitle>
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
                onModelChange={setContent}
                tag="textarea"
                config={{
                  theme: "gray",
                  imageUpload: true,
                  imageUploadURL: "/api/upload",
                  imageUploadParam: "file",
                  imageAllowedTypes: ["jpeg", "jpg", "png", "gif", "webp"],
                  imageDefaultWidth: 0,
                  heightMin: 250,
                  placeholderText: "Scrie conținutul articolului...",
                }}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="btn btn-primary w-full bg-[#387780] text-white hover:bg-[#387780bd] rounded-full p-3 mt-4"
          >
            Salvează modificările
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
