import type { Handler } from "@netlify/functions";

export const handler: Handler = async () => {
  try {
    const response = await fetch(
      "https://frontendcodingtest-production.up.railway.app/api/products"
    );

    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: data.products || data || [] }),
    };
  } catch (error: any) {
    console.error("Function error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ products: [], error: error.message || "Unknown error" }),
    };
  }
};
