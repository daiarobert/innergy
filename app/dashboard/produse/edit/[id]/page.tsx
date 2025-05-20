"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const res = await fetch(`/api/produse/${id}`);
      const data = await res.json();
      setProduct(data);
      setForm({
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
      });
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/produse/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
      }),
    });
    router.push("/dashboard/produse");
  };

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4 bg-base-100 shadow rounded">
      <h1 className="text-2xl font-bold">Edit Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Title</label>
          <Input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label">Description</label>
          <Textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label">Price (£)</label>
          <Input
            name="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <Input
            name="image"
            value={form.image}
            onChange={handleChange}
            required
          />
        </div>

        {form.image && (
          <Image
            src={form.image}
            alt="Preview"
            width={600}
            height={300}
            className="rounded shadow"
          />
        )}

        <Button type="submit" className="btn btn-primary w-full">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
