import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Afleuncer - Mobile-first Social Commerce</title>
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
        <section className="hero">
          <div className="hero-content">
            <div className="logo-placeholder">
              <div className="logo-icon">📱</div>
            </div>
            <h1 className="hero-title">Afleuncer</h1>
            <p className="hero-tagline">Mobile-first social-commerce app for creators</p>
            <p className="hero-description">
              Connect with your audience through authentic product recommendations. 
              Share your favorite finds, earn commissions, and build meaningful relationships 
              with your followers in a mobile-optimized experience.
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">📸</span>
                <span>Visual Product Posts</span>
              </div>
              <div className="feature">
                <span className="feature-icon">💰</span>
                <span>Commission Tracking</span>
              </div>
              <div className="feature">
                <span className="feature-icon">👥</span>
                <span>Community Building</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/feed" className="btn btn-primary">View Demo Feed</Link>
              <Link href="/about" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </section>

        <section className="app-preview">
          <h2>App Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">📱</div>
              <h3>Mobile-First Design</h3>
              <p>Optimized for mobile devices with intuitive touch interactions and responsive layouts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">🛍️</div>
              <h3>Product Discovery</h3>
              <p>Discover trending products and share your recommendations with your community.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Track your performance, earnings, and engagement metrics in real-time.</p>
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
