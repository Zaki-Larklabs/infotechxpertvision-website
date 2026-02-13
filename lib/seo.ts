import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://infotechxpertvision.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'InfotechXpertVision';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

export function generateSEO({
  title,
  description = 'Enterprise AI & SaaS solutions for modern businesses. Transform your operations with our cutting-edge platforms.',
  image = '/images/og-default.png',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = []
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `${siteUrl}${url}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const defaultKeywords = [
    'AI solutions',
    'SaaS platform',
    'business automation',
    'enterprise software',
    'InfotechXpertVision'
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: author ? [{ name: author }] : [{ name: 'InfotechXpertVision Team' }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@infotechxpert',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price?: number;
  currency?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'USD',
      },
    }),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'Enterprise AI & SaaS solutions provider',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_COMPANY_PHONE,
      contactType: 'Customer Service',
      email: process.env.NEXT_PUBLIC_COMPANY_EMAIL,
    },
    sameAs: [
      'https://www.linkedin.com/company/infotechxpertvision',
      'https://twitter.com/infotechxpert',
      'https://www.facebook.com/infotechxpertvision',
    ],
  };
}
