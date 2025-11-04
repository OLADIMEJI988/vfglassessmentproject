import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://frontendcodingtest-production.up.railway.app/api/products');
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
