"use client";

import { useEffect, useState } from "react";
import RelatedProduct from "./RelatedProduct";
import RelatedProductSkeleton from "./RelatedProductSkeleton";

interface Product {
  image: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  numSold: number;
}

export default function RelatedProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`/.netlify/functions/products`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch products");
        }

        setProducts(data.products || []);
      } catch (err: any) {
        console.error("Error fetching related products:", err);
        setError(err.message || "Unknown error");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex max-lg:w-full items-center justify-between">
        <p className="text-[#141414] text-[25px] max-lg:text-[23px] font-semibold">
          Related Products
        </p>
        <p className="text-[#525252] text-[15px] underline cursor-pointer">
          View All
        </p>
      </div>

      {loading ? (
        <div className="flex max-lg:grid max-lg:grid-cols-2 gap-[35px] max-lg:gap-[20px] mt-6 max-lg:mt-10">
          {[...Array(4)].map((_, i) => (
            <RelatedProductSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p className="text-red-500 mt-4">Failed to load products</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500 mt-4">No related products found.</p>
      ) : (
        <div className="flex max-lg:grid max-lg:grid-cols-2 gap-[35px] max-lg:gap-[20px] mt-6 max-lg:mt-10">
          {products.map((product, index) => (
            <RelatedProduct
              key={index}
              img={product.image || "/anyday1.svg"}
              productname={product.name || "Unnamed Product"}
              productprice={`$${product.price ?? 0}`}
              productstock={`${product.stock ?? 0}`}
              productdetail={product.description || "No description available"}
              numsold={product.numSold?.toLocaleString() || "0"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
