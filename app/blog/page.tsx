import type { Metadata } from "next";
import { ArrowRight, BookOpenText } from "lucide-react";
import { cities } from "../cities";
import { BlogHeader } from "./blog-header";

const footerServices = [
  "Mobile Apps",
  "Websites & Digital Experiences",
  "ERP & Business Systems",
  "AI & Process Automation",
  "E-commerce, Shopify & SEO",
  "Product Modernisation & Support",
];

export const metadata: Metadata = {
  title: "Business Technology Insights | Shree Technologies Blog",
  description:
    "Practical guidance about websites, mobile applications, ERP, CRM, AI automation and digital growth from Shree Technologies.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Business Technology Insights | Shree Technologies Blog",
    description:
      "Practical guidance about websites, mobile applications, ERP, CRM, AI automation and digital growth.",
  },
};

export default function BlogPage() {
  return (
    <main id="top" className="blog-page">
      <BlogHeader blogActive />

      <section className="blog-hero" aria-labelledby="blog-title">
        <div className="container blog-hero-inner">
          <span className="section-label blog-label">INSIGHTS</span>
          <h1 id="blog-title">The Shree Technologies Blog</h1>
          <p>
            Practical guidance on websites, mobile applications, ERP, CRM, AI automation and
            digital growth—written for business leaders, not technical teams.
          </p>
        </div>
      </section>

      <section className="blog-index" aria-labelledby="latest-insights-title">
        <div className="container blog-index-wrap">
          <div className="blog-list-heading">
            <div>
              <span className="section-label">ARTICLES</span>
              <h2 id="latest-insights-title">Latest insights</h2>
            </div>
            <small>0 ARTICLES</small>
          </div>

          <div className="blog-empty-state">
            <span className="blog-empty-icon" aria-hidden="true"><BookOpenText /></span>
            <span className="blog-coming-soon">COMING SOON</span>
            <h2>Useful ideas are being prepared.</h2>
            <p>
              We are building a library of clear, experience-led articles for organisations
              planning websites, apps and business systems. No articles have been published yet.
            </p>
            <a className="blog-contact-link" href="/#contact">
              Discuss a project with us <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-top">
          <div className="footer-brand">
            <a href="/" className="logo" aria-label="Shree Technologies home">
              <span className="logo-mark"><span /></span>
              <span>Shree<span className="logo-muted"> Technologies</span></span>
            </a>
            <p>Digital products designed with clarity,<br />built with care, and made to perform.</p>
            <div className="footer-cities" aria-label="Cities we serve">
              {cities.map((location) => location.city).join(" · ")}
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-services">
              <b>SERVICES</b>
              {footerServices.map((service) => <a href="/#services" key={service}>{service}</a>)}
            </div>
            <div>
              <b>EXPLORE</b>
              <a href="/#services">Services</a>
              <a href="/#work">Our work</a>
              <a href="/#process">Process</a>
              <a href="/blog">Blog</a>
            </div>
            <div>
              <b>CONNECT</b>
              <a href="/#contact">Start a project</a>
              <a href="/#faq">FAQs</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Shree Technologies. All rights reserved.</span>
          <span className="footer-legal"><a href="/privacy-policy">Privacy Policy</a><i>·</i>Crafted for what comes next.</span>
        </div>
      </footer>
    </main>
  );
}
