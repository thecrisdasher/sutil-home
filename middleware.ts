import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Solo procesar rutas de imágenes
  if (pathname.startsWith('/images/') && (pathname.endsWith('.png') || pathname.endsWith('.jpg') || pathname.endsWith('.jpeg'))) {
    const acceptHeader = request.headers.get('accept') || '';
    
    // Obtener la ruta base sin extensión
    const basePath = pathname.replace(/\.(png|jpg|jpeg)$/, '');
    
    // Verificar soporte para AVIF (más eficiente)
    if (acceptHeader.includes('image/avif')) {
      const avifUrl = request.nextUrl.clone();
      avifUrl.pathname = `${basePath}.avif`;
      return NextResponse.rewrite(avifUrl);
    }
    
    // Verificar soporte para WebP
    if (acceptHeader.includes('image/webp')) {
      const webpUrl = request.nextUrl.clone();
      webpUrl.pathname = `${basePath}.webp`;
      return NextResponse.rewrite(webpUrl);
    }
  }
  
  // Agregar headers de caché para recursos estáticos
  if (pathname.startsWith('/images/') || pathname.startsWith('/_next/static/')) {
    const response = NextResponse.next();
    
    // Cache por 1 año para imágenes y assets estáticos
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    
    return response;
  }
  
  // Agregar headers de seguridad y rendimiento
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  
  // Performance headers
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};