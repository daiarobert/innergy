"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const schema = z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  price: z.coerce.number().positive(),
  image: z.string().url(),
});

export default function NewProductPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const res = await fetch("/api/produse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/dashboard/produse");
    }
  };

  return (
    <Card className="max-w-xl mx-auto bg-white">
      <CardHeader>
        <CardTitle className="text-center">Create New Product</CardTitle>
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
            <Label>Description</Label>
            <Textarea {...register("description")} />
            {errors.description && (
              <p className="text-error text-sm">
                {errors.description.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Price (£)</Label>
            <Input type="number" step="0.01" {...register("price")} />
            {errors.price && (
              <p className="text-error text-sm">
                {errors.price.message as string}
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
