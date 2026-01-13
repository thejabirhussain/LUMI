/**
 * Client-side utility to fetch a fresh access token from the API
 */
export async function fetchFreshToken(): Promise<string> {
  try {
    const response = await fetch('/api/auth/token', {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Failed to fetch token: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    
    if (!data.accessToken) {
      throw new Error('No access token in response');
    }

    // Validate token is not empty
    // Note: Hume access tokens are 28 characters, which is the correct format
    const token = String(data.accessToken).trim();
    if (!token || token.length < 20) {
      console.error('Token appears to be invalid:', {
        length: token.length,
      });
      throw new Error(`Invalid token received from server. Token length: ${token.length}`);
    }

    console.log('Token fetched successfully, length:', token.length);
    return token;
  } catch (error) {
    console.error('Error fetching fresh token:', error);
    throw error instanceof Error 
      ? error 
      : new Error('Failed to fetch fresh token');
  }
}
