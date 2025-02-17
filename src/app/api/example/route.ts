import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ hello: 'world' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST() {
  try {
    return NextResponse.json({ hello: 'world' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}

