import type { Metadata } from "next";
import { cities } from "../cities";
import { BlogHeader } from "../blog/blog-header";

const sections = [
  ["introduction", "1. Introduction"],
  ["information-we-collect", "2. Information We Collect"],
  ["google-analytics", "3. Google Analytics"],
  ["advertising", "4. Advertising and Tracking"],
  ["cookies", "5. Cookies and Similar Technologies"],
  ["communication", "6. Telephone and WhatsApp"],
  ["use-of-information", "7. How We Use Information"],
  ["sharing", "8. Sharing of Information"],
  ["security", "9. Data Security"],
  ["retention", "10. Data Retention"],
  ["rights", "11. Your Privacy Rights"],
  ["international", "12. International Processing"],
  ["third-party", "13. Third-Party Websites"],
  ["children", "14. Children’s Privacy"],
  ["changes", "15. Changes to This Policy"],
  ["contact-information", "16. Contact Information"],
] as const;

const footerServices = [
  "Mobile Apps",
  "Websites & Digital Experiences",
  "ERP & Business Systems",
  "AI & Process Automation",
  "E-commerce, Shopify & SEO",
  "Product Modernisation & Support",
];

export const metadata: Metadata = {
  title: "Privacy Policy | Shree Technologies",
  description:
    "Read the Shree Technologies Privacy Policy, including how website, analytics, advertising and communication information may be handled.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "/privacy-policy",
    title: "Privacy Policy | Shree Technologies",
    description:
      "How Shree Technologies may collect, use, process and protect information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="legal-page">
      <BlogHeader />

      <section className="legal-hero" aria-labelledby="privacy-title">
        <div className="container legal-hero-inner">
          <span className="section-label legal-label">LEGAL</span>
          <h1 id="privacy-title">Privacy Policy</h1>
          <p>How we collect, use, process and protect information when you visit our website or communicate with us.</p>
          <div className="legal-dates">
            <span><small>EFFECTIVE DATE</small>28 October 2026</span>
            <span><small>LAST UPDATED</small>28 October 2026</span>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="container legal-layout">
          <aside className="legal-toc" aria-label="Privacy policy contents">
            <span>ON THIS PAGE</span>
            <nav>
              {sections.map(([id, title]) => <a href={`#${id}`} key={id}>{title}</a>)}
            </nav>
          </aside>

          <article className="legal-article">
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>Welcome to Shree Technologies.</p>
              <p>Shree Technologies (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a technology and digital solutions company based in Lucknow, Uttar Pradesh, India.</p>
              <p>We respect your privacy and are committed to handling personal information responsibly and transparently.</p>
              <p>This Privacy Policy explains how information may be collected, used, processed, and protected when you visit our website or communicate with us.</p>
              <p><strong>Website:</strong> <a href="https://shreetechsystems.com/">https://shreetechsystems.com/</a></p>
              <p>By using our website, you acknowledge that you have been provided with this Privacy Policy. Where consent is required for specific processing activities, we will request it separately.</p>
            </section>

            <section id="information-we-collect">
              <h2>2. Information We Collect</h2>
              <p>Our website primarily provides information about our company, services, and technology solutions.</p>
              <p>We do not require visitors to register, create accounts, or provide personal information to browse our website.</p>
              <p>However, certain information may be collected in the following circumstances.</p>
              <h3>2.1 Information You Voluntarily Provide</h3>
              <p>When you contact us through telephone, WhatsApp, or other communication channels, you may voluntarily provide information such as:</p>
              <ul>
                <li>Your name and contact details.</li>
                <li>Your business or organisation name.</li>
                <li>Information about your project or service requirements.</li>
                <li>Other information you choose to share during communication.</li>
              </ul>
              <p>We use this information only for legitimate business communication, responding to enquiries, providing quotations, and delivering requested services.</p>
              <h3>2.2 Automatically Collected Information</h3>
              <p>When you visit our website, certain technical information may be collected through website hosting infrastructure, analytics tools, cookies, or similar technologies.</p>
              <p>This information may include:</p>
              <ul>
                <li>IP address.</li>
                <li>Browser type and version.</li>
                <li>Device type and operating system.</li>
                <li>Pages visited and time spent on the website.</li>
                <li>Referring websites or traffic sources.</li>
                <li>Approximate geographic location.</li>
                <li>Interactions with website content.</li>
              </ul>
              <p>Such information helps us understand website usage, maintain security, and improve website performance.</p>
            </section>

            <section id="google-analytics">
              <h2>3. Google Analytics</h2>
              <p>We use Google Analytics to understand how visitors interact with our website.</p>
              <p>Google Analytics may collect information about website traffic, visitor behaviour, devices, browsing sessions, and interactions with website content.</p>
              <p>We use analytics information to:</p>
              <ul>
                <li>Measure website traffic and performance.</li>
                <li>Understand visitor engagement.</li>
                <li>Identify popular pages and services.</li>
                <li>Improve website content and usability.</li>
                <li>Evaluate the effectiveness of our marketing activities.</li>
              </ul>
              <p>Google Analytics may use cookies and similar technologies to process information.</p>
              <p>For more information about Google&apos;s data practices, please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google&apos;s Privacy Policy</a>.</p>
            </section>

            <section id="advertising">
              <h2>4. Advertising and Tracking Technologies</h2>
              <p>We may use advertising and measurement technologies, including Meta Pixel and Google advertising services.</p>
              <p>These technologies may help us:</p>
              <ul>
                <li>Understand the effectiveness of advertising campaigns.</li>
                <li>Measure website visits originating from advertisements.</li>
                <li>Analyse visitor interactions with our website.</li>
                <li>Build advertising audiences where permitted.</li>
                <li>Deliver relevant advertisements to interested audiences.</li>
              </ul>
              <p>Advertising technologies may use cookies, browser identifiers, and other tracking mechanisms.</p>
              <p>Where required by applicable law, non-essential advertising technologies will be activated only after obtaining the visitor&apos;s consent.</p>
              <p>We do not sell personal information collected through our website.</p>
            </section>

            <section id="cookies">
              <h2>5. Cookies and Similar Technologies</h2>
              <p>Our website may use cookies and similar technologies to improve functionality, analyse traffic, and support advertising activities.</p>
              <p>Cookies are small data files stored on a visitor&apos;s device.</p>
              <p>The cookies used on our website may include:</p>
              <p><strong>Essential Cookies:</strong> Used where necessary for website functionality, security, and technical operation.</p>
              <p><strong>Analytics Cookies:</strong> Used to understand website traffic, visitor behaviour, and website performance.</p>
              <p><strong>Advertising Cookies:</strong> Used, where enabled, to measure advertising effectiveness and support relevant advertising.</p>
              <p>Visitors may manage cookies through their browser settings.</p>
              <p>Where a cookie consent mechanism is provided, visitors may also manage their preferences through that mechanism.</p>
              <p>Disabling certain cookies may affect some website features or measurement capabilities.</p>
            </section>

            <section id="communication">
              <h2>6. Telephone and WhatsApp Communication</h2>
              <p>Our website provides telephone and WhatsApp contact options to allow visitors to communicate directly with Shree Technologies.</p>
              <p>When you contact us through these channels, we may receive your phone number, profile information made available by the communication service, and any information you voluntarily share.</p>
              <p>We use this information to:</p>
              <ul>
                <li>Respond to enquiries.</li>
                <li>Discuss service requirements.</li>
                <li>Provide business information and quotations.</li>
                <li>Maintain relevant business correspondence.</li>
                <li>Deliver requested services.</li>
              </ul>
              <p>WhatsApp is operated by a third-party service provider and is subject to its own privacy practices.</p>
              <p>We encourage visitors to review <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">WhatsApp&apos;s Privacy Policy</a> before using the service.</p>
              <p>We do not use contact information for unsolicited promotional messaging without an appropriate lawful basis.</p>
            </section>

            <section id="use-of-information">
              <h2>7. How We Use Information</h2>
              <p>Information collected through our website or business communications may be used to:</p>
              <ul>
                <li>Operate and maintain our website.</li>
                <li>Respond to enquiries and business communications.</li>
                <li>Provide information about our services.</li>
                <li>Improve website usability and performance.</li>
                <li>Analyse website traffic.</li>
                <li>Measure advertising effectiveness.</li>
                <li>Maintain website security.</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p>We process personal information only for appropriate and lawful purposes.</p>
            </section>

            <section id="sharing">
              <h2>8. Sharing of Information</h2>
              <p>Shree Technologies does not sell or rent visitors&apos; personal information.</p>
              <p>However, information may be processed by trusted third-party service providers where necessary for website operations, analytics, advertising, communication, or security.</p>
              <p>These providers may include:</p>
              <ul>
                <li>Website hosting and infrastructure providers.</li>
                <li>Google Analytics and related Google services.</li>
                <li>Meta advertising and measurement services.</li>
                <li>WhatsApp and other communication providers.</li>
              </ul>
              <p>We may also disclose information where required by applicable law or a valid legal process.</p>
              <p>Third-party providers may process information according to their respective privacy policies and applicable contractual arrangements.</p>
            </section>

            <section id="security">
              <h2>9. Data Security</h2>
              <p>We take reasonable technical and organisational measures to protect information against unauthorised access, disclosure, alteration, or destruction.</p>
              <p>These measures may include secure website connections, access restrictions, software updates, and appropriate security practices.</p>
              <p>However, no internet-based transmission or electronic storage system can be guaranteed to be completely secure.</p>
            </section>

            <section id="retention">
              <h2>10. Data Retention</h2>
              <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including responding to enquiries, maintaining relevant business records, resolving disputes, and complying with legal obligations.</p>
              <p>Information processed through third-party analytics and advertising platforms may be retained according to their configured retention periods and applicable policies.</p>
              <p>When personal information is no longer required, we take reasonable steps to delete it or otherwise handle it securely, subject to applicable legal requirements.</p>
            </section>

            <section id="rights">
              <h2>11. Your Privacy Rights</h2>
              <p>Subject to applicable data protection laws, you may have rights relating to your personal information, including the ability to:</p>
              <ul>
                <li>Request information about personal data processed by us.</li>
                <li>Request correction or updating of inaccurate information.</li>
                <li>Request deletion of personal information where applicable.</li>
                <li>Withdraw consent for processing based on consent.</li>
                <li>Raise concerns about how your information is handled.</li>
              </ul>
              <p>You may contact us using the contact details available on our website to submit a privacy-related request.</p>
              <p>We will review and respond to such requests in accordance with applicable laws.</p>
            </section>

            <section id="international">
              <h2>12. International Data Processing</h2>
              <p>Some third-party service providers used by our website may process or store information on servers located outside India.</p>
              <p>Where international processing occurs, we will take appropriate steps to comply with applicable data protection requirements.</p>
            </section>

            <section id="third-party">
              <h2>13. Third-Party Websites</h2>
              <p>Our website may contain links to external websites, services, or platforms.</p>
              <p>These websites operate independently and may have their own privacy policies and information-handling practices.</p>
              <p>Shree Technologies is not responsible for the privacy practices or content of independently operated third-party websites.</p>
              <p>We recommend reviewing their privacy policies before providing personal information.</p>
            </section>

            <section id="children">
              <h2>14. Children&apos;s Privacy</h2>
              <p>Our website is intended primarily for businesses, professionals, and individuals seeking technology and digital services.</p>
              <p>It is not specifically directed toward children under the age of 18.</p>
              <p>We do not knowingly seek to collect personal information from children through our website.</p>
              <p>If we become aware that personal information relating to a child has been collected inappropriately, we will take appropriate action in accordance with applicable law.</p>
            </section>

            <section id="changes">
              <h2>15. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our website, services, technologies, or legal obligations.</p>
              <p>Any updates will be published on this page with a revised &quot;Last Updated&quot; date.</p>
              <p>Where required by law, we will provide additional notice or obtain consent before introducing materially different processing activities.</p>
            </section>

            <section id="contact-information">
              <h2>16. Contact Information</h2>
              <p>For questions, concerns, or requests relating to this Privacy Policy, please contact:</p>
              <div className="legal-contact-card">
                <strong>Shree Technologies</strong>
                <span>Lucknow, Uttar Pradesh, India</span>
                <span><b>Website:</b> <a href="https://shreetechsystems.com/">https://shreetechsystems.com/</a></span>
                <span><b>Telephone / WhatsApp:</b> Please refer to the <a href="/#contact">contact details displayed on our website</a>.</span>
              </div>
              <p>We will make reasonable efforts to address privacy-related enquiries in accordance with applicable laws.</p>
            </section>

            <p className="policy-copyright">© 2026 Shree Technologies. All rights reserved.</p>
          </article>
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
            <div className="footer-cities" aria-label="Cities we serve">{cities.map((location) => location.city).join(" · ")}</div>
          </div>
          <div className="footer-links">
            <div className="footer-services"><b>SERVICES</b>{footerServices.map((service) => <a href="/#services" key={service}>{service}</a>)}</div>
            <div><b>EXPLORE</b><a href="/#services">Services</a><a href="/#work">Our work</a><a href="/#process">Process</a><a href="/blog">Blog</a></div>
            <div><b>CONNECT</b><a href="/#contact">Start a project</a><a href="/#faq">FAQs</a><a href="#top">Back to top</a></div>
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
