import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { donor_name, email, amount, message, payment_id } = body;

    if (!donor_name || !email || !amount) {
      return NextResponse.json(
        { error: 'Missing required fields: donor_name, email, amount' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('donations')
      .insert([
        {
          donor_name,
          email,
          amount: parseFloat(amount),
          message: message || null,
          payment_id: payment_id || null,
          payment_status: payment_id ? 'completed' : 'pending',
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save donation' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, donation: data[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
