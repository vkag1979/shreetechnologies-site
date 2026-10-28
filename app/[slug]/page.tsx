import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, getCityBySlug } from "../cities";
import { SitePage } from "../page";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  const title = `Websites, Mobile Apps, ERP, CRM & Software Development ${city.city} | Shree Technologies`;
  const description = `Professional website development, ERP systems, mobile apps and AI automation for organisations in ${city.city}, ${city.state}.`;

  return {
    title,
    description,
    keywords: [
      `website development ${city.city}`,
      `ERP development ${city.city}`,
      `mobile app development ${city.city}`,
      `AI automation ${city.city}`,
      `software company ${city.city}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `/${city.slug}`,
    },
    alternates: {
      canonical: `/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Website, ERP and App Development in ${city.city}`,
    serviceType: "Website, ERP, mobile application and AI automation development",
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": city.state === city.city ? "AdministrativeArea" : "State",
        name: city.state,
      },
    },
    provider: {
      "@type": "Organization",
      name: "Shree Technologies",
      email: "contact@shreetechsystems.com",
      telephone: "+917007036919",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SitePage city={city} />
    </>
  );
}
