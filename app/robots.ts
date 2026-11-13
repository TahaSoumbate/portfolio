import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://tahadigitallab.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/', '/_next/', '/static/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}