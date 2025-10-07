import Head from 'next/head'
import Link from 'next/link'

export default function Feed() {
  return (
    <>
      <Head>
        <title>Demo Feed - Afleuncer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Afleuncer</h2>
          </div>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/feed" className="nav-link active">Demo Feed</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="feed-header">
          <h1>Demo Product Feed</h1>
          <p>Example posts showcasing Afleuncer&apos;s social-commerce features</p>
        </section>

        <section className="feed-posts">
          <article className="post">
            <div className="post-header">
              <div className="creator-info">
                <div className="creator-avatar">👩‍💼</div>
                <div className="creator-details">
                  <h3>Sarah Chen</h3>
                  <span className="post-time">2 hours ago</span>
                </div>
              </div>
            </div>
            
            <div className="post-content">
              <p>Just discovered this amazing wireless earbuds! The sound quality is incredible and they last all day. Perfect for my morning runs! 🏃‍♀️</p>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🎧</div>
              </div>
              <div className="product-info">
                <h3>Premium Wireless Earbuds</h3>
                <p className="product-description">High-quality wireless earbuds with noise cancellation and 24-hour battery life.</p>
                <div className="product-price">$89.99</div>
                <a href="/api/redirect?post_id=earbuds-001" className="btn btn-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>

            <div className="ftc-disclosure">
              <small>I may earn a commission if you purchase via this link</small>
            </div>
          </article>

          <article className="post">
            <div className="post-header">
              <div className="creator-info">
                <div className="creator-avatar">👨‍💻</div>
                <div className="creator-details">
                  <h3>Mike Rodriguez</h3>
                  <span className="post-time">5 hours ago</span>
                </div>
              </div>
            </div>
            
            <div className="post-content">
              <p>This ergonomic keyboard has been a game-changer for my productivity! My wrists feel so much better after long coding sessions.</p>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">⌨️</div>
              </div>
              <div className="product-info">
                <h3>Ergonomic Mechanical Keyboard</h3>
                <p className="product-description">Split-design mechanical keyboard with customizable RGB lighting and wrist support.</p>
                <div className="product-price">$149.99</div>
                <a href="/api/redirect?post_id=keyboard-002" className="btn btn-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>

            <div className="ftc-disclosure">
              <small>I may earn a commission if you purchase via this link</small>
            </div>
          </article>

          <article className="post">
            <div className="post-header">
              <div className="creator-info">
                <div className="creator-avatar">👩‍🎨</div>
                <div className="creator-details">
                  <h3>Emma Wilson</h3>
                  <span className="post-time">1 day ago</span>
                </div>
              </div>
            </div>
            
            <div className="post-content">
              <p>Finally found the perfect yoga mat! It&apos;s non-slip, eco-friendly, and the colors are gorgeous. My practice has never been better! 🧘‍♀️</p>
            </div>

            <div className="product-card">
              <div className="product-image">
                <div className="image-placeholder">🧘‍♀️</div>
              </div>
              <div className="product-info">
                <h3>Eco-Friendly Yoga Mat</h3>
                <p className="product-description">Premium non-slip yoga mat made from sustainable materials with beautiful gradient colors.</p>
                <div className="product-price">$59.99</div>
                <a href="/api/redirect?post_id=yogamat-003" className="btn btn-buy" target="_blank" rel="noopener noreferrer">Buy Now</a>
              </div>
            </div>

            <div className="ftc-disclosure">
              <small>I may earn a commission if you purchase via this link</small>
            </div>
          </article>
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
