"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function EditProductPage() {
  const params = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`/api/produse/${params.id}`);
        const data = await res.json();
        console.log(res, data);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) fetchProduct();
  }, [params.id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!product?._id) return <p className="p-4 text-error">Product not found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4 bg-base-100 shadow rounded">
      <h1 className="text-2xl font-bold">Edit Product</h1>

      <div>
        <label className="label">Title</label>
        <p className="input input-bordered">{product.title}</p>
      </div>

      <div>
        <label className="label">Description</label>
        <p className="input input-bordered">{product.description}</p>
      </div>

      <div>
        <label className="label">Price</label>
        <p className="input input-bordered">£{product.price}</p>
      </div>

      <div>
        <label className="label">Image</label>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={400}
          className="rounded shadow"
        />
      </div>
    </div>
  );
}
