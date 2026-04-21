import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Explor\' Art',
    short_name: "Explor'",
    description: 'Next.js App pour découvrir les œuvres d\'artistes en PWA',
    start_url: '/',
    "scope": "/",
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
            "src": "./icons/logotype_noire.svg",
            "sizes": "192x192",
            "type": "image/svg+xml",
        },
        {
            "src": "./icons/logotype_noire.svg",
            "sizes": "512x512",
            "type": "image/svg+xml",
        }
    ],
  }
}