"use client";

import { useState, useMemo } from "react";
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

export default function ProductTable({ products }: { products: any[] }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filtered = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = async (id: string) => {
    await fetch(`/api/produse/${id}`, { method: "DELETE" });
    location.reload();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Produse</h1>
        <Link
          href="/dashboard/produse/new"
          className="btn btn btn-accent text-white bg-[#387780] rounded-full p-3 hover:bg-[#387780bd]"
        >
          + Add Product
        </Link>
      </div>

      <Input
        type="text" // Explicitly set the type
        placeholder="Search by title..."
        value={search}
        onChange={(e) => {
          setCurrentPage(1);
          setSearch(e.target.value);
        }}
        className="w-full md:w-1/2 bg-white"
      />

      <div className="overflow-x-auto rounded-lg shadow">
        <Table className="bg-white">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Price (£)</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.map((product) => (
              <TableRow key={product._id || product.title}>
                <TableCell>{product.title}</TableCell>
                <TableCell>£{product.price}</TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-center">
                    <Link href={`/dashboard/produse/${product._id}`}>
                      <div className="btn btn-sm btn-outline  bg-[#387780] rounded-lg p-2 text-white hover:bg-[#387780bd]">
                        View
                      </div>
                    </Link>
                    <Link href={`/dashboard/produse/edit/${product._id}`}>
                      <div className="btn btn-sm btn-outline bg-[#D2CCA1] rounded-lg p-2 text-white hover:bg-[#d2cca1bd]">
                        Edit
                      </div>
                    </Link>
                    <div
                      className="btn btn-outline btn-danger btn-sm bg-[#E83151] rounded-lg p-2 text-white hover:bg-[#e83151bd] cursor-pointer"
                      onClick={() => handleDelete(product._id)}
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

      {/* Pagination Controls */}
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
