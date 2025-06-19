"use client";

import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import Loader from "@/components/Loader";

export default function ProdusePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/produse");
        if (!res.ok) throw new Error("Server response not OK");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.data)) {
          // in caz ca ai impachetat în { data: [...] }
          setProducts(data.data);
        } else {
          console.error("Unexpected data format", data);
          setProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p className="p-4"><Loader/></p>;

  return <ProductTable products={products} />;
}
