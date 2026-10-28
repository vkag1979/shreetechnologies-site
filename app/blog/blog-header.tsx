"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function BlogHeader({ blogActive = false }: { blogActive?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header blog-site-header">
      <div className="nav-wrap">
        <a href="/" className="logo" aria-label="Shree Technologies home">
          <span className="logo-mark"><span /></span>
          <span>Shree<span className="logo-muted"> Technologies</span></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#why-us" onClick={() => setMenuOpen(false)}>Why us</a>
          <a href="/#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="/#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/blog" className={blogActive ? "active" : undefined} onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
