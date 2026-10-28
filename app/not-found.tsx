import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Shree Technologies",
  description: "The page you requested could not be found.",
};

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow" aria-hidden="true" />
      <section className="not-found-card" aria-labelledby="not-found-title">
        <span className="not-found-code">404</span>
        <p className="section-label">PAGE NOT FOUND</p>
        <h1 id="not-found-title">This page has moved or never existed.</h1>
        <p>
          The link may be outdated. Return to the Shree Technologies homepage, or contact us if
          you were looking for a specific service.
        </p>
        <div className="not-found-actions">
          <Link className="btn btn-primary" href="/">
            <ArrowLeft size={17} /> Back to homepage
          </Link>
          <a
            className="btn btn-ghost"
            href="https://wa.me/917007036919?text=Hi%20Shree%20Technologies%2C%20I%20need%20help%20finding%20a%20page."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> WhatsApp us
          </a>
        </div>
      </section>
    </main>
  );
}
