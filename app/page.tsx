"use client";

import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  CircleCheckBig,
  ClipboardCheck,
  Code2,
  Database,
  FlaskConical,
  Globe2,
  GraduationCap,
  Layers3,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  Phone,
  Rocket,
  Search,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  X,
  Zap,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { cities, type CityPageContent } from "./cities";

const services = [
  {
    icon: Layers3,
    title: "Business Systems & ERP",
    text: "Bring teams, records and everyday workflows into one connected system designed around your organisation.",
    accent: "cyan",
  },
  {
    icon: Sparkles,
    title: "AI & Process Automation",
    text: "Reduce repetitive work with intelligent tools that analyse information, automate decisions and accelerate routine processes.",
    accent: "violet",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Application Development",
    text: "Launch reliable Android and iOS applications with intuitive interfaces, secure backends and scalable architecture.",
    accent: "green",
  },
  {
    icon: Code2,
    title: "Websites & Digital Experiences",
    text: "Create a fast, accessible and distinctive online presence that communicates your value and supports business growth.",
    accent: "amber",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Search Growth",
    text: "Improve online stores through Shopify development, technical SEO, product optimisation and ongoing storefront management.",
    accent: "rose",
  },
  {
    icon: ShieldCheck,
    title: "Product Modernisation & Support",
    text: "Keep existing websites and applications secure, current and effective through audits, upgrades and dependable maintenance.",
    accent: "blue",
  },
];

const footerServices = [
  "Mobile Apps",
  "Websites & Digital Experiences",
  "ERP & Business Systems",
  "AI & Process Automation",
  "E-commerce, Shopify & SEO",
  "Product Modernisation & Support",
];

const process = [
  { icon: ClipboardCheck, title: "Tell Us Your Idea", text: "Share your goals, requirements and current challenges. We clarify the scope and define what success should look like." },
  { icon: Palette, title: "We Design & Build", text: "We translate the brief into clear user flows, polished interfaces and dependable software, with progress shared at each milestone." },
  { icon: CircleCheckBig, title: "You Review", text: "You test the working product and share feedback. We refine the details until the experience is ready for release." },
  { icon: Rocket, title: "We Launch", text: "We manage deployment, hand over the product and remain available for support, maintenance and future improvements." },
];

const plans = [
  {
    kicker: "WEBSITE DEVELOPMENT",
    price: "₹9,999",
    suffix: "onwards",
    copy: "Perfect for businesses getting started online.",
    features: ["Mobile responsive design", "SEO-ready structure", "Contact form integration", "Fast loading performance", "1 round of revisions"],
    button: "WhatsApp Us",
  },
  {
    kicker: "CRMS, DASHBOARDS & WEB APPS",
    price: "₹60,000",
    suffix: "onwards",
    copy: "For businesses that need custom internal software.",
    features: ["Custom dashboard or CRM", "User logins & roles", "Reports", "Backend + database", "Post-launch support"],
    button: "WhatsApp Us",
    featured: true,
  },
  {
    kicker: "MOBILE APPS",
    price: "₹1,20,000",
    suffix: "onwards",
    copy: "For businesses launching on Android and iOS.",
    features: ["Android + iOS", "Admin panel", "Backend + database", "Play Store & App Store publishing", "Post-launch support"],
    button: "WhatsApp Us",
  },
  {
    kicker: "CUSTOM SOLUTION",
    price: "Get a Quote",
    copy: "For large-scale or enterprise projects.",
    features: ["Fully scoped to requirements", "Custom integrations", "Dedicated point of contact", "SLA-based support", "Pricing based on scope"],
    button: "Contact Us",
  },
];

const faqs = [
  ["What should I budget for a professionally built business website?", "Website packages begin at ₹9,999 for a responsive business presence. The final investment depends on the number of pages, content requirements, integrations and overall complexity. Custom dashboards and ERP or CRM solutions begin at ₹60,000 onwards, while mobile application projects begin at ₹1,20,000 onwards. Every engagement starts with a clearly itemised proposal so you understand the scope and cost before development begins.", "PRICING"],
  ["What is the typical delivery timeline for a digital project?", "A focused business website can usually be completed within 3–7 working days once the required content and approvals are available. More involved platforms, such as ERP systems, dashboards or workflow applications, commonly require 2–4 weeks. Your proposal will include a milestone-based schedule tailored to the agreed features, review process and launch requirements.", "TIMELINE"],
  ["Will my website work on mobile devices and be prepared for search engines?", "Yes. Responsive behaviour and technical search readiness are included as standard. We structure each website with accessible navigation, semantic HTML, logical heading levels, optimised metadata and performance-conscious development. These foundations help search engines understand the website, while ongoing rankings also depend on content quality, competition and continued SEO activity.", "QUALITY"],
  ["Can Shree Technologies assist with domains, hosting and deployment?", "Yes. We can recommend an appropriate hosting setup, assist with domain registration and manage the deployment process. If you already have a domain or hosting provider, we can work within that environment. Third-party hosting, domain and licensing charges remain separate and are communicated clearly before purchase or renewal.", "SETUP"],
  ["Do you develop mobile applications for growing businesses?", "Yes. We develop Android and iOS applications, progressive web apps and mobile-friendly business platforms. The recommended approach depends on your users, required device capabilities, administrative workflows and long-term product roadmap. After a discovery discussion, we provide a technical recommendation and a scope-based quotation.", "APPS"],
  ["What assistance is available after the product goes live?", "Post-launch support can include technical monitoring, security and dependency updates, defect resolution, content changes, performance improvements and incremental feature development. Support arrangements are defined around the needs of the product, giving your team a dependable path for maintenance and future improvements.", "SUPPORT"],
  ["Can you deliver projects for organisations located anywhere in India?", "Yes. Our discovery, review, development and support processes are designed for remote collaboration. We can work with organisations across India through scheduled discussions, shared project updates and structured approval stages, while maintaining clear communication from the initial brief through launch and ongoing support.", "REACH"],
  ["Which business sectors can your solutions support?", "Our approach can be adapted to education, automotive services, retail, e-commerce, professional services, real estate, hospitality, healthcare, finance and other operationally focused sectors. We begin by understanding your users and processes, then design the website, application or ERP workflow around the requirements of your organisation.", "INDUSTRIES"],
];

function Logo() {
  return (
    <a href="/" className="logo" aria-label="Shree Technologies home">
      <span className="logo-mark"><span /></span>
      <span>Shree<span className="logo-muted"> Technologies</span></span>
    </a>
  );
}

export function SitePage({ city }: { city?: CityPageContent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main id="top">
      <div className="announcement"><Sparkles size={15} /> {city ? `Planning a digital project in ${city.city}? Let’s build it together.` : "Have an idea in mind? Let's turn it into a digital product."} <a href="#contact">Start a conversation <ArrowRight size={14} /></a></div>

      <header className="site-header">
        <div className="nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why us</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className={city ? "hero city-hero section-pad" : "hero section-pad"}>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-ribbons" aria-hidden="true">
          <svg viewBox="0 0 1000 660" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="ribbon-gradient-a" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4c7dff" stopOpacity="0" />
                <stop offset="28%" stopColor="#4c7dff" />
                <stop offset="57%" stopColor="#20df8d" />
                <stop offset="82%" stopColor="#f07a63" />
                <stop offset="100%" stopColor="#8b6fff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ribbon-gradient-b" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#20df8d" stopOpacity="0" />
                <stop offset="38%" stopColor="#20df8d" />
                <stop offset="65%" stopColor="#4c7dff" />
                <stop offset="100%" stopColor="#8b6fff" stopOpacity="0" />
              </linearGradient>
              <filter id="ribbon-blur" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id="ribbon-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g className="ribbon ribbon-back" filter="url(#ribbon-blur)">
              <path d="M80 570 C 230 310, 350 655, 480 390 S 710 130, 930 330" stroke="url(#ribbon-gradient-a)" strokeWidth="60" />
              <path d="M30 475 C 230 590, 305 215, 520 345 S 760 590, 990 210" stroke="url(#ribbon-gradient-b)" strokeWidth="38" />
            </g>
            <g className="ribbon ribbon-front" filter="url(#ribbon-glow)">
              <path d="M55 565 C 245 300, 355 640, 485 380 S 720 125, 945 330" stroke="url(#ribbon-gradient-a)" strokeWidth="5" />
              <path d="M18 480 C 235 590, 305 220, 520 350 S 765 585, 995 205" stroke="url(#ribbon-gradient-b)" strokeWidth="3" />
              <path d="M125 625 C 270 360, 430 520, 560 285 S 790 220, 905 95" stroke="url(#ribbon-gradient-a)" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="hero-noise" />
        <div className="container hero-inner">
          <div className={city ? "eyebrow" : "eyebrow hero-price-eyebrow"}>{city && <span />} {city ? city.eyebrow : "Mobile apps from ₹1.2 lakh · CRMs & dashboards from ₹60K · Websites from ₹9,999"}</div>
          <h1>{city ? <>{city.headingLead}<br/><em>{city.headingAccent}</em></> : <>Mobile Apps, ERP,<br/><em>CRM &amp; Websites</em></>}</h1>
          <p className="hero-copy">{city ? city.description : "We build websites, mobile apps, and AI-powered applications that automate your business processes and strengthen your digital presence."}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Start your project <ArrowRight size={18} /></a>
            <a className="btn btn-ghost" href="#work"><MousePointer2 size={18} /> Explore our work</a>
          </div>
          <div className="hero-proof">
            <span><Zap size={16} /> {city ? `${city.city}-focused solutions` : "Focused delivery"}</span><i />
            <span><Sparkles size={16} /> {city ? "AI & ERP expertise" : "Modern experiences"}</span><i />
            <span><ShieldCheck size={16} /> {city ? "Remote delivery across India" : "Built to last"}</span>
          </div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>WEBSITES <i /> MOBILE APPS <i /> ERP SYSTEMS <i /> AI AUTOMATION <i /> SHOPIFY <i /> SEO <i /> PRODUCT SUPPORT <i /> WEBSITES <i /> MOBILE APPS <i /> ERP SYSTEMS <i /></div></section>

      <section className="section section-services" id="services">
        <div className="container">
          <div className="section-heading centered services-heading">
            <div><span className="section-label services-label">OUR SERVICES</span><h2>HOW YOUR BUSINESS<br/>BENEFITS</h2></div>
            <p>We design websites, mobile applications, and AI-enabled ERP and CRM systems that help your business work smarter and grow.</p>
          </div>
          <div className="service-grid">
            {services.map(({icon: Icon, title, text, accent}, index) => (
              <article className={`service-card accent-${accent}`} key={title}>
                <div className="service-top"><span className="service-icon"><Icon size={25} /></span><small>0{index + 1}</small></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Contact us about ${title}`}>Contact Us <ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why" id="why-us">
        <div className="container">
          <div className="section-heading centered why-heading">
            <span className="section-label why-label">WHY SHREE TECHNOLOGIES</span>
            <h2>A dependable technology partner, from idea to launch.</h2>
          </div>
          <div className="why-cards">
            <article className="why-card why-speed">
              <span className="why-icon"><Workflow size={27}/></span>
              <h3>Designed Around Your Business</h3>
              <p>We begin by understanding your workflows, customers and operational goals. Every website, application and ERP system is shaped around the way your organisation actually works.</p>
            </article>
            <article className="why-card why-value">
              <span className="why-icon"><ClipboardCheck size={27}/></span>
              <h3>Clear Commitments, No Guesswork</h3>
              <p>You receive a defined scope, transparent pricing and practical delivery milestones before development begins. Regular progress updates keep your team informed throughout the project.</p>
            </article>
            <article className="why-card why-ai">
              <span className="why-icon"><Code2 size={27}/></span>
              <h3>Modern Engineering, Faster Delivery</h3>
              <p>We combine experienced technical judgement with modern AI-assisted workflows to deliver efficiently—without compromising usability, security or long-term maintainability.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="container">
          <div className="section-heading centered work-heading">
            <div><span className="section-label work-label">OUR WORK</span><h2>Digital solutions built<br/>for real organisations.</h2></div>
            <p>From educational websites to AI inspection systems, Shopify commerce and custom ERP platforms—here are some of the products we build and maintain.</p>
          </div>
          <div className="work-grid project-grid-icons">
            <article className="project-card icon-project featured-project project-august">
              <div className="project-icon-scene" aria-hidden="true"><span className="icon-primary"><CarFront/></span><span className="icon-secondary"><ScanLine/></span><span className="icon-tertiary"><Sparkles/></span></div>
              <div className="project-info"><span>AI · AUTOMOTIVE</span><h3>August Technical Inspection Services Pvt. Ltd.</h3><p>An AI-based vehicle inspection solution designed to improve inspection workflows, documentation and decision-making.</p><div className="project-tags"><i>AI Inspection</i><i>Web Application</i><i>Automation</i></div></div>
            </article>
            <article className="project-card icon-project project-vssd">
              <div className="project-icon-scene" aria-hidden="true"><span className="icon-primary"><GraduationCap/></span><span className="icon-secondary"><Globe2/></span></div>
              <div className="project-info"><span>EDUCATION · WEB</span><h3>VSSD College</h3><p>A responsive institutional website supported through ongoing content, maintenance and technical improvements.</p><div className="project-tags"><i>Website</i><i>Maintenance</i><i>CMS</i></div></div>
            </article>
            <article className="project-card icon-project project-souq">
              <div className="project-icon-scene" aria-hidden="true"><span className="icon-primary"><ShoppingBag/></span><span className="icon-secondary"><FlaskConical/></span><span className="icon-tertiary"><Search/></span></div>
              <div className="project-info"><span>SHOPIFY · SEO</span><h3>Souqscent Kuwait</h3><p>Ongoing Shopify store management, storefront improvements and search-engine optimisation for a fragrance retailer in Kuwait.</p><div className="project-tags"><i>Shopify</i><i>SEO</i><i>Store Maintenance</i></div></div>
            </article>
            <article className="project-card icon-project project-rk">
              <div className="project-icon-scene" aria-hidden="true"><span className="icon-primary"><LayoutDashboard/></span><span className="icon-secondary"><Database/></span><span className="icon-tertiary"><Building2/></span></div>
              <div className="project-info"><span>WEBSITE · ERP</span><h3>RK Awasthi</h3><p>A connected website and ERP solution designed to organise business operations within one digital system.</p><div className="project-tags"><i>Website</i><i>ERP</i><i>Business Automation</i></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="container">
          <div className="section-heading centered process-heading"><span className="section-label process-label">PROCESS</span><h2>How It Works</h2><p>From idea to launch—in four clear steps.</p></div>
          <div className="process-grid">
            {process.map(({icon: Icon, title, text}, index) => <article key={title}>
              <div className="process-icon"><Icon/><span>{index + 1}</span></div>
              <h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-heading centered"><span className="section-label pricing-label">PRICING</span><h2>Simple, Transparent Pricing</h2><p>No hidden charges. No surprises. Serving businesses across India.</p></div>
          <div className="pricing-grid">
            {plans.map((plan) => <article className={plan.featured ? "price-card featured" : "price-card"} key={plan.kicker}>
              {plan.featured && <div className="popular">MOST POPULAR</div>}
              <span>{plan.kicker}</span><div className="price-value"><strong>{plan.price}</strong>{plan.suffix && <small>{plan.suffix}</small>}</div><p>{plan.copy}</p>
              <ul>{plan.features.map((feature) => <li key={feature}><Check size={16}/>{feature}</li>)}</ul>
              <a className={plan.featured ? "btn btn-primary" : "btn btn-ghost"} href="#contact">{plan.button} <ArrowRight size={16}/></a>
            </article>)}
          </div>
          <p className="priority-note"><Zap size={16}/> Need it fast? <strong>Priority builds</strong> — get your app live in 4 weeks.</p>
        </div>
      </section>

      {!city && <section className="section location-hub" id="locations" aria-labelledby="locations-heading">
        <div className="container">
          <div className="section-heading centered location-heading"><span className="section-label location-label">LOCATIONS WE SERVE</span><h2 id="locations-heading">Digital solutions across India</h2><p>Explore locally focused website, ERP and application development services for growing organisations.</p></div>
          <div className="location-links">
            {cities.map((location) => (
              <a href={`/${location.slug}`} key={location.slug}>
                <span>Website, ERP &amp; App Development in</span>
                <strong>{location.city}</strong>
                <ArrowRight size={18}/>
              </a>
            ))}
          </div>
        </div>
      </section>}

      <section className="section faq" id="faq">
        <div className="container faq-wrap">
          <div className="section-heading centered faq-heading"><span className="section-label faq-label">FAQ</span><h2>Frequently Asked Questions</h2></div>
          <div className="faq-list">
            {faqs.map(([q,a,tag], index) => <article className={openFaq === index ? "faq-item open" : "faq-item"} key={q}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                <span className="faq-toggle" aria-hidden="true">{openFaq === index ? "−" : "+"}</span>
                <span className="faq-question">{q}</span>
                <span className="faq-tag">{tag}</span>
              </button>
              <div className="faq-answer"><p>{a}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-glow" />
        <div className="container contact-grid">
          <div className="contact-copy"><span className="section-label">LET&apos;S BUILD</span><h2>Your next idea<br/>starts here.</h2><p>Tell us what you are imagining, what needs fixing, or where your product needs to go next. Reach out directly and we&apos;ll help shape the way forward.</p>
            <div className="contact-note"><MessageCircle size={20}/><span><strong>Talk directly with our team.</strong>Choose the channel that works best for you.</span></div>
          </div>
          <div className="contact-actions">
            <a className="contact-action whatsapp-action" href="https://wa.me/917007036919?text=Hi%20Shree%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer">
              <span><MessageCircle size={24}/></span><div><small>WHATSAPP</small><strong>Chat with us now</strong><p>+91 70070 36919</p></div><ArrowRight size={20}/>
            </a>
            <a className="contact-action call-action" href="tel:+917007036919">
              <span><Phone size={23}/></span><div><small>CALL US</small><strong>+91 70070 36919</strong><p>Speak directly with our team</p></div><ArrowRight size={20}/>
            </a>
            <a className="contact-action email-action" href="mailto:contact@shreetechsystems.com">
              <span><Mail size={23}/></span><div><small>EMAIL</small><strong>contact@shreetechsystems.com</strong><p>Send us your project details</p></div><ArrowRight size={20}/>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-top"><div className="footer-brand"><Logo/><p>Digital products designed with clarity,<br/>built with care, and made to perform.</p><div className="footer-cities" aria-label="Cities we serve">{cities.map((location) => location.city).join(" · ")}</div></div><div className="footer-links"><div className="footer-services"><b>SERVICES</b>{footerServices.map((service) => <a href="#services" key={service}>{service}</a>)}</div><div><b>EXPLORE</b><a href="#services">Services</a><a href="#work">Our work</a><a href="#process">Process</a><a href="/blog">Blog</a></div><div><b>CONNECT</b><a href="#contact">Start a project</a><a href="#faq">FAQs</a><a href="#top">Back to top</a></div></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Shree Technologies. All rights reserved.</span><span className="footer-legal"><a href="/privacy-policy">Privacy Policy</a><i>·</i>Crafted for what comes next.</span></div>
      </footer>
    </main>
  );
}

export default function Home() {
  return <SitePage />;
}
