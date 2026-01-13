import { NextResponse } from 'next/server';
import { getHumeAccessToken } from '@/utils/getHumeAccessToken';

/**
 * Token refresh endpoint for Hume Voice SDK
 * This endpoint is called by the client to fetch fresh access tokens
 * when the current token expires or when establishing a new connection.
 * The Hume SDK may also call this endpoint automatically when it detects
 * token expiry during an active WebSocket connection.
 */
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const accessToken = await getHumeAccessToken();
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Unable to get access token' },
        { status: 500 }
      );
    }

    // Ensure token is a string
    // Note: Hume access tokens are 28 characters, which is the correct format
    const tokenString = String(accessToken).trim();
    
    if (!tokenString || tokenString.length < 20) {
      console.error('Token validation failed:', {
        length: tokenString.length,
        type: typeof accessToken,
      });
      return NextResponse.json(
        { error: `Invalid token format received from Hume API. Token length: ${tokenString.length}` },
        { status: 500 }
      );
    }

    console.log('Token generated successfully, length:', tokenString.length);
    
    return NextResponse.json({ accessToken: tokenString });
  } catch (error) {
    console.error('Error fetching token:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch token' },
      { status: 500 }
    );
  }
}
