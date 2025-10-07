import Head from 'next/head'
import Link from 'next/link'

export default function BuyIndex() {
  return (
    <>
      <Head>
        <title>Buy Products - Afleuncer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <h2>Afleuncer</h2>
            </Link>
          </div>
          <div className="nav-menu">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/feed" className="nav-link">Demo Feed</Link>
            <Link href="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="buy-now-container">
          <div className="breadcrumb">
            <Link href="/feed" className="breadcrumb-link">← Back to Feed</Link>
          </div>

          <div className="error-container">
            <h1>Select a Product</h1>
            <p>Please choose a product from our feed to view details and purchase.</p>
            <Link href="/feed" className="btn btn-primary">Browse Products</Link>
          </div>
        </div>
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
