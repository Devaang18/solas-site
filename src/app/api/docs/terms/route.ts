import { NextResponse } from 'next/server';

export async function GET() {
  // Use server-side only environment variable (NOT NEXT_PUBLIC_*)
  // This ensures the actual GCS URL is never exposed to the client
  const url = process.env.TERMS_PDF_URL || 'https://storage.googleapis.com/solas-site-docs/terms-of-service.pdf';
  
  if (!url) {
    return NextResponse.json({ error: 'PDF URL not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(url, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Solas-Website-Server'
      }
    });
    
    if (!res.ok || !res.body) {
      return NextResponse.json({ error: 'Unable to fetch terms' }, { status: 502 });
    }

    // Create new headers object - don't copy from original to avoid leaking GCS URL
    const headers = new Headers();
    headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0, private');
    headers.set('Pragma', 'no-cache');
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'inline; filename="terms-of-service.pdf"');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'SAMEORIGIN');
    // Ensure no referrer or source URL is leaked
    headers.delete('X-Source-URL');
    
    return new NextResponse(res.body as unknown as ReadableStream, { headers, status: 200 });
  } catch (error) {
    // Don't expose error details that might contain URLs
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}


