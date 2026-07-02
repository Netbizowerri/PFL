/**
 * SEO & GEO Utilities — JSON-LD generators, meta helpers, and structured data factories.
 * Designed for Google Search Console indexing, AI search engines (GEO), and rich social previews.
 */

import type { HelmetProps } from "react-helmet-async";

// ─── Site Configuration ──────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Plastic-pollution Free Lagos Project",
  shortName: "PFL Project",
  url: "https://pflproject.com",
  domain: "pflproject.com",
  tagline: "An Initiative of Heritage Promotion",
  description:
    "Plastic-pollution Free Lagos Project (PFL Project) — a grassroots initiative of Heritage Promotion bridging Lagos State climate action and community execution through CDA training, plastic shredders and plastic waste banks.",
  email: "pflproject@gmail.com",
  phone: "+2349152588491",
  address: {
    street: "Plot 10 Ikere Estate, Araromi Ale",
    city: "Badagry",
    state: "Lagos",
    country: "Nigeria",
    postalCode: "103101",
  },
  geo: {
    latitude: 6.4131,
    longitude: 2.8872,
  },
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61574074258387",
    instagram: "https://instagram.com/pflproject",
    whatsapp: "https://wa.me/2349152588491",
  },
  ogImage:
    "https://i.ibb.co/wZ1zdyKw/Whats-App-Image-2026-07-02-at-6-48-57-AM.jpg",
  ogImageAlt: "PFL Project — Plastic-pollution Free Lagos Project",
  logo: "/logo.png",
  foundingDate: "2025",
  // Google Search Console verification — replace with actual meta content
  googleSiteVerification: "",
} as const;

// ─── Page Definitions ─────────────────────────────────────────────────────────────

export type PageKey = "home" | "lagosAndPlastics" | "partners" | "contact" | "notFound";

export const PAGES: Record<PageKey, {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
}> = {
  home: {
    title: "PFL Project — Plastic-pollution Free Lagos Project",
    description:
      "Plastic-pollution Free Lagos Project (PFL Project) — a grassroots initiative of Heritage Promotion bridging Lagos State climate action and community execution through CDA training, plastic shredders and plastic waste banks.",
    path: "/",
    keywords: [
      "plastic pollution Lagos",
      "PFL Project",
      "plastic waste management Nigeria",
      "CDA training Lagos",
      "plastic shredder Lagos",
      "plastic waste bank",
      "Lagos environment",
      "Heritage Promotion",
      "climate action Lagos",
      "community development association Lagos",
    ],
    ogTitle: "PFL Project — Plastic-pollution Free Lagos Project",
    ogDescription:
      "Bridging Lagos State climate action and community execution — one CDA at a time. Training, plastic shredders, and waste banks across Lagos.",
  },
  lagosAndPlastics: {
    title: "Lagos and Plastics — Policy, Infrastructure & Data | PFL Project",
    description:
      "Lagos generates 870,000 tonnes of plastic waste annually. Learn about the polystyrene ban, SUP phase-out, LAWMA & FBRA recycling partnerships, and monthly sanitation in Lagos State.",
    path: "/lagos-and-plastics",
    keywords: [
      "Lagos plastic waste",
      "polystyrene ban Lagos",
      "single-use plastics ban",
      "Lagos recycling infrastructure",
      "LAWMA FBRA partnership",
      "Lagos monthly sanitation",
      "plastic pollution data Lagos",
      "circular economy Lagos",
    ],
    ogTitle: "Lagos and Plastics — Policy, Infrastructure & Data | PFL Project",
    ogDescription:
      "Lagos generates 870,000 tonnes of plastic waste annually. From polystyrene bans to community recycling — see the full picture.",
  },
  partners: {
    title: "PFL Project Partners — Government, Council & Community Collaboration",
    description:
      "Meet the PFL Project institutional partners: Lagos State Ministry of Environment, Ministry of Local Government, LSCDAC, 57 Council Chairmen, CDCs, and CDAs across Lagos State.",
    path: "/partners",
    keywords: [
      "PFL Project partners",
      "Lagos State Ministry of Environment",
      "Lagos Ministry of Local Government",
      "LSCDAC",
      "community development association",
      "Lagos council chairmen",
      "plastic pollution partners Nigeria",
    ],
    ogTitle: "PFL Project Partners — Government, Council & Community Collaboration",
    ogDescription:
      "From Lagos State ministries through council chairmen to the CDAs — the PFL Project partner network spans every level needed to turn policy into practice.",
  },
  contact: {
    title: "Contact PFL Project — Get Involved in Lagos Plastic Pollution Action",
    description:
      "Reach the PFL Project team in Badagry, Lagos. Partner with us as a CDA, institution, or supporter in the fight against plastic pollution in Lagos State.",
    path: "/contact",
    keywords: [
      "contact PFL Project",
      "plastic pollution Lagos contact",
      "Badagry environment",
      "join plastic pollution action Lagos",
      "CDA partnership Lagos",
      "Heritage Promotion contact",
    ],
    ogTitle: "Contact PFL Project — Get Involved in Lagos Plastic Pollution Action",
    ogDescription:
      "Reach the PFL Project team in Badagry, Lagos — by WhatsApp, email, or contact form. Partner with us today.",
  },
  notFound: {
    title: "Page Not Found — 404 | PFL Project",
    description:
      "The page you're looking for doesn't exist. Return to PFL Project — Plastic-pollution Free Lagos Project homepage.",
    path: "/404",
    keywords: ["404", "page not found", "PFL Project"],
  },
};

// ─── JSON-LD Helpers ─────────────────────────────────────────────────────────────

export function jsonLdOrg() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.shortName,
    alternateName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    image: SITE_CONFIG.ogImage,
    sameAs: [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.whatsapp,
    ],
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: SITE_CONFIG.address.country,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    foundingDate: SITE_CONFIG.foundingDate,
    founder: {
      "@type": "Organization",
      name: "Heritage Promotion",
    },
    description: SITE_CONFIG.description,
  };
}

export function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.shortName,
    alternateName: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-NG",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_CONFIG.url}/#ngo`,
    name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    image: SITE_CONFIG.ogImage,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: SITE_CONFIG.address.country,
      postalCode: SITE_CONFIG.address.postalCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Lagos",
        sameAs: "https://www.wikidata.org/wiki/Q8673",
      },
      {
        "@type": "AdministrativeArea",
        name: "Lagos State",
        sameAs: "https://www.wikidata.org/wiki/Q815913",
      },
    ],
    knowsAbout: [
      "Plastic pollution reduction",
      "Community Development Associations",
      "Waste management",
      "Climate action",
      "Circular economy",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Heritage Promotion",
    },
  };
}

export function jsonLdBreadcrumbList(items: { name: string; path: string }[]) {
  const itemListElement = items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_CONFIG.url}${item.path}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_CONFIG.url}${items[items.length - 1]?.path}/#breadcrumb`,
    itemListElement,
  };
}

/** Generate the complete set of global JSON-LD scripts that go on every page. */
export function globalJsonLdScripts(): string[] {
  return [
    JSON.stringify(jsonLdOrg()),
    JSON.stringify(jsonLdWebSite()),
    JSON.stringify(jsonLdLocalBusiness()),
  ];
}

// ─── Meta Tag Helpers ─────────────────────────────────────────────────────────────

export interface SEOMeta {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  noindex?: boolean;
  breadcrumbs?: { name: string; path: string }[];
  /** Extra JSON-LD to inject per page */
  extraJsonLd?: Record<string, unknown>[];
}

/** Build canonical + alternate href for hreflang support */
export function canonicalUrl(path: string): string {
  const normalized = path.endsWith("/") ? path : path;
  return `${SITE_CONFIG.url}${normalized}`;
}

/** Generate the JSON-LD script tag string for injection into <head> */
export function jsonLdScript(ld: Record<string, unknown>): string {
  return JSON.stringify(ld);
}