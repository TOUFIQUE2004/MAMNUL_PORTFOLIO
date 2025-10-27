import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LIC Agent — Mamnul Khan",
  description:
    "Trusted LIC agent offering term, endowment, child, and retirement plans with seamless service.",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} app-root`}>
        <a className="skip-link" href="#main">Skip to content</a>

        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand" aria-label="LIC Agent Services">
              <span className="brand-badge" aria-hidden="true">LIC</span>
              <span className="brand-text">Agent Services</span>
            </Link>

            <nav className="nav">
              <Link href="#services" className="nav-link">Services</Link>
              <Link href="#plans" className="nav-link">Plans</Link>
              <Link href="#about" className="nav-link">About</Link>
              <Link href="#contact" className="nav-link">Contact</Link>
            </nav>

            <div className="header-actions">
              <a className="btn btn-primary" href="tel:+917908062942">Call Now</a>
            </div>
          </div>
        </header>

        <section
          aria-label="Hero"
          style={{
            textAlign: 'center',
            padding: '2.5rem 1rem',
            background: 'linear-gradient(#ffffff, #f6f7f9)',
          }}
        >
          <img
            src="/lic_logo.jpg"
            alt="LIC logo"
            style={{ height: 72, display: 'block', margin: '0 auto 1rem' }}
          />

          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0.6rem auto',
              border: '6px solid #fff',
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              background: '#fff',
            }}
          >
            <img
              src="/mamnul_photo.png"
              alt="Mamnul Khan"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          <h1 style={{ margin: 8, fontSize: 20, letterSpacing: 1, fontWeight: 700 }}>MAMNUL KHAN</h1>
          <p style={{ margin: 4, color: '#444', fontSize: 15 }}>Insurance Advisor</p>

          <p style={{ marginTop: 12, color: '#222', fontWeight: 600 }}>
            <a href="tel:+917908062942" style={{ color: 'inherit', textDecoration: 'none' }}>
              +91 7908062942
            </a>
            <br />
            <a href="mailto:mamnulkhan@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              mamnulkhan@gmail.com
            </a>
          </p>

          <blockquote
            style={{
              margin: '2rem auto',
              maxWidth: 680,
              color: '#0b63c9',
              fontWeight: 600,
              fontSize: 16,
              lineHeight: 1.45,
            }}
          >
            Protect your loved ones' future with life insurance — a promise today for a secure tomorrow.
            Choose LIC for a lifetime of trust, security, and commitment.
          </blockquote>

          <p style={{ marginTop: 6 }}>
            <a href="https://www.licindia.in" target="_blank" rel="noreferrer" style={{ color: '#0b63c9' }}>
              www.licindia.in
            </a>
          </p>
        </section>

        <main id="main" className="container main-content">
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <p className="muted">
              IRDAI licensed LIC agent. This is an independent advisor website and not an official LIC site.
            </p>
            <p className="muted">© {year} md toufique sheikh. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
