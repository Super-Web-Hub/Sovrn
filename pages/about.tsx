import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Afleuncer</title>
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
            <Link href="/about" className="nav-link active">About</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="about-hero">
          <h1>About Afleuncer</h1>
          <p className="about-subtitle">Mobile-first social-commerce platform for creators</p>
        </section>

        <section className="about-content">
          <div className="about-notice">
            <div className="notice-box">
              <h3>⚠️ Demo Site Notice</h3>
              <p>This is a staging/demo site for affiliate approval purposes. The content and functionality shown here are for demonstration only.</p>
            </div>
          </div>

          <div className="about-sections">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>Afleuncer empowers content creators to monetize their influence through authentic product recommendations. We believe in transparent, value-driven affiliate marketing that benefits both creators and their audiences.</p>
            </div>

            <div className="about-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                <li>📱 Mobile-optimized interface for seamless user experience</li>
                <li>🛍️ Easy product discovery and recommendation tools</li>
                <li>📊 Real-time analytics and commission tracking</li>
                <li>🤝 Community building and engagement features</li>
                <li>🔒 FTC-compliant disclosure management</li>
              </ul>
            </div>

            <div className="about-section">
              <h2>For Publishers</h2>
              <p>Afleuncer provides a streamlined platform for content creators to share product recommendations while maintaining transparency with their audience. Our mobile-first approach ensures optimal performance across all devices.</p>
            </div>
          </div>

          <div className="contact-section">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Developer Contact:</strong>
                <p>Email: developer@afleuncer.com</p>
                <p>Phone: (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <strong>Business Inquiries:</strong>
                <p>Email: business@afleuncer.com</p>
                <p>Partnership: partnerships@afleuncer.com</p>
              </div>
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
