/**
 * SEO Component — Injects per-page meta tags, JSON-LD structured data, and Open Graph / Twitter Card tags.
 * Uses react-helmet-async for safe concurrent head management.
 */
import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, canonicalUrl, globalJsonLdScripts } from "../utils/seo";
import type { SEOMeta } from "../utils/seo";

interface SEOProps extends SEOMeta {
  /** Additional JSON-LD scripts specific to this page */
  extraJsonLd?: Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  keywords,
  noindex,
  extraJsonLd,
}: SEOProps) {
  const canonical = canonicalUrl(path);
  const ogImg = ogImage || SITE_CONFIG.ogImage;
  const ogAlt = ogImageAlt || SITE_CONFIG.ogImageAlt;
  const ogT = ogTitle || title;
  const ogD = ogDescription || description;

  // Build all JSON-LD scripts
  const jsonLdScripts = [
    ...globalJsonLdScripts(),
    ...(extraJsonLd?.map((ld) => JSON.stringify(ld)) ?? []),
  ];

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Google Search Console */}
      {SITE_CONFIG.googleSiteVerification && (
        <meta
          name="google-site-verification"
          content={SITE_CONFIG.googleSiteVerification}
        />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogT} />
      <meta property="og:description" content={ogD} />
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:alt" content={ogAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_CONFIG.shortName} />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogT} />
      <meta name="twitter:description" content={ogD} />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content={ogAlt} />

      {/* GEO / AI Search Signals */}
      <meta name="generator" content="PFL Project" />
      <meta name="application-name" content={SITE_CONFIG.shortName} />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* JSON-LD Structured Data */}
      {jsonLdScripts.map((script, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {script}
        </script>
      ))}
    </Helmet>
  );
}