"use client";

import { useEffect, useState } from "react";
import DashboardTable from "@/components/DashboardTable";
import Loader from "@/components/Loader";

export default function ArticolePage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch("/api/articole");
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();

        if (Array.isArray(data)) {
          setArticles(data);
        } else if (Array.isArray(data.data)) {
          setArticles(data.data);
        } else {
          console.error("Unexpected article format", data);
          setArticles([]);
        }
      } catch (err) {
        console.error("Fetch articles error:", err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) return <p className="p-4"><Loader/></p>;

  return (
    <DashboardTable
      title="Articole"
      data={articles}
      createLink="/dashboard/articole/new"
      viewPrefix="dashboard/articole"
      editPrefix="articole/edit"
      type="article"
    />
  );
}
