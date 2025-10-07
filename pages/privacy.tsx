import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Afleuncer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Afleuncer</h2>
          </div>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/feed" className="nav-link">Demo Feed</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="privacy-hero">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">Last updated: December 2024</p>
        </section>

        <section className="privacy-content">
          <div className="privacy-notice">
            <div className="notice-box">
              <h3>Demo Site Notice</h3>
              <p>This is a demonstration site for affiliate approval purposes. The privacy policy below is a template and should be reviewed by legal counsel before use in production.</p>
            </div>
          </div>

          <div className="privacy-sections">
            <div className="privacy-section">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
              <ul>
                <li>Account information (name, email, profile details)</li>
                <li>Content you create and share</li>
                <li>Usage data and analytics</li>
                <li>Device and technical information</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Process transactions and track commissions</li>
                <li>Communicate with you about our services</li>
                <li>Ensure compliance with FTC regulations</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Affiliate Marketing Disclosure</h2>
              <p>Afleuncer is committed to transparency in affiliate marketing. We ensure that:</p>
              <ul>
                <li>All affiliate relationships are clearly disclosed</li>
                <li>Commission tracking is transparent</li>
                <li>User privacy is protected in all transactions</li>
                <li>FTC guidelines are strictly followed</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div className="privacy-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>Email: privacy@afleuncer.com</p>
              <p>Address: 123 Demo Street, Demo City, DC 12345</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Afleuncer. All rights reserved.</p>
          <Link href="/privacy" className="privacy-link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  )
}
