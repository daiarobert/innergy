"use client";

import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

export default function ProdusePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/produse")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.error("❌ Eroare la fetch produse:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="/floare.svg"
          alt="Loading..."
          className="w-20 h-20 animate-spin"
        />
      </div>
    );

  return <ProductTable products={products} />;
}
