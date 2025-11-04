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

export default function PopularProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `/api/products`
        );
        const data = await res.json();
        setProducts(data.products || data || []);
      } catch (err) {
        console.error("Error fetching popular products:", err);
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
          Popular this week
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
      ) : (
        <div className="flex max-lg:grid max-lg:grid-cols-2 gap-[35px] max-lg:gap-[20px] mt-6 max-lg:mt-10">
          {products.length > 0 ? (
            products.map((product, index) => (
              <RelatedProduct
                key={index}
                img={product.image || "/anyday1.svg"}
                productname={product.name}
                productprice={`$${product.price}`}
                productstock={`${product.stock}`}
                productdetail={
                  product.description || "Long Sleeve Utility Shirt, Navy, 6"
                }
                numsold={product.numSold?.toLocaleString() || "1,238"}
              />
            ))
          ) : (
            <p className="text-gray-500">No popular products found.</p>
          )}
        </div>
      )}
    </div>
  );
}
