import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Replace with your actual database query
    const apiKeys = [
      {
        id: 1,
        name: 'Production API Key',
        key: 'pk_live_123456789',
        createdAt: new Date(),
      },
      // Add more mock data as needed
    ];

    return NextResponse.json(apiKeys);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch API keys' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Replace with your actual database insertion
    const newKey = {
      id: Date.now(),
      name: body.name,
      key: `pk_live_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
    };

    return NextResponse.json(newKey);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create API key' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    // Replace with your actual database deletion logic
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete API key' },
      { status: 500 }
    );
  }
} 