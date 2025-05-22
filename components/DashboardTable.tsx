"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DashboardTable({
  title,
  data,
  createLink,
  viewPrefix,
  editPrefix,
  type,
}: {
  title: string;
  data: any[];
  createLink: string;
  viewPrefix: string;
  editPrefix: string;
  type: "product" | "article";
}) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = useMemo(() => {
    return data.filter((item) =>
      item.title?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (id: string) => {
    await fetch(`/api/articole/${id}`, { method: "DELETE" });
    location.reload();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
        <Link
          href={createLink}
          className="btn btn-accent text-white bg-[#387780] rounded-full p-3 hover:bg-[#387780bd]"
        >
          + Add {title.slice(0, -1)}
        </Link>
      </div>

      <Input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setCurrentPage(1);
          setSearch(e.target.value);
        }}
        className="w-full md:w-1/2 bg-white"
      />

      <div className="overflow-x-auto rounded-lg shadow bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              {type === "article" && <TableHead>Author</TableHead>}
              {type === "article" && <TableHead>Published</TableHead>}
              {type === "product" && <TableHead>Price</TableHead>}
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                {type === "article" && <TableCell>{item.author}</TableCell>}
                {type === "article" && (
                  <TableCell>{item.published ? "✅" : "❌"}</TableCell>
                )}
                {type === "product" && <TableCell>£{item.price}</TableCell>}
                <TableCell>
                  <div className="flex gap-2 justify-center">
                    <Link href={`/${viewPrefix}/${item._id}`}>
                      <div className="btn btn-sm bg-[#387780] text-white rounded-lg p-2 hover:bg-[#387780bd]">
                        View
                      </div>
                    </Link>
                    <Link href={`/dashboard/${editPrefix}/${item._id}`}>
                      <div className="btn btn-sm bg-[#D2CCA1] text-white rounded-lg p-2 hover:bg-[#d2cca1bd]">
                        Edit
                      </div>
                    </Link>
                    <div
                      className="btn btn-outline btn-danger btn-sm bg-[#E83151] rounded-lg p-2 text-white hover:bg-[#e83151bd] cursor-pointer"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center gap-2 pt-4">
        <Button
          size="sm"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </Button>
        <span className="px-2 pt-2 text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
