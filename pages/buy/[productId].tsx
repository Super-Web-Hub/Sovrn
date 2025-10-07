import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

// Product data
const PRODUCTS = {
  "earbuds-001": {
    id: "earbuds-001",
    name: "Premium Wireless Earbuds",
    description: "High-quality wireless earbuds with noise cancellation and 24-hour battery life.",
    price: 89.99,
    image: "🎧",
    features: [
      "Active Noise Cancellation",
      "24-hour battery life",
      "Wireless charging case",
      "Water resistant (IPX7)",
      "Premium sound quality"
    ],
    creator: {
      name: "Sarah Chen",
      avatar: "👩‍💼",
      post: "Just discovered this amazing wireless earbuds! The sound quality is incredible and they last all day. Perfect for my morning runs! 🏃‍♀️"
    }
  },
  "keyboard-002": {
    id: "keyboard-002",
    name: "Ergonomic Mechanical Keyboard",
    description: "Split-design mechanical keyboard with customizable RGB lighting and wrist support.",
    price: 149.99,
    image: "⌨️",
    features: [
      "Split ergonomic design",
      "Mechanical switches",
      "RGB backlighting",
      "Wrist support included",
      "USB-C connectivity"
    ],
    creator: {
      name: "Mike Rodriguez",
      avatar: "👨‍💻",
      post: "This ergonomic keyboard has been a game-changer for my productivity! My wrists feel so much better after long coding sessions."
    }
  },
  "yogamat-003": {
    id: "yogamat-003",
    name: "Eco-Friendly Yoga Mat",
    description: "Premium non-slip yoga mat made from sustainable materials with beautiful gradient colors.",
    price: 59.99,
    image: "🧘‍♀️",
    features: [
      "Non-slip surface",
      "Eco-friendly materials",
      "Beautiful gradient colors",
      "Extra thick (6mm)",
      "Easy to clean"
    ],
    creator: {
      name: "Emma Wilson",
      avatar: "👩‍🎨",
      post: "Finally found the perfect yoga mat! It&apos;s non-slip, eco-friendly, and the colors are gorgeous. My practice has never been better! 🧘‍♀️"
    }
  }
}

export default function BuyNow() {
  const router = useRouter()
  const { productId } = router.query
  const [product, setProduct] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (productId && typeof productId === 'string') {
      const foundProduct = PRODUCTS[productId as keyof typeof PRODUCTS]
      if (foundProduct) {
        setProduct(foundProduct)
      }
      setIsLoading(false)
    }
  }, [productId])

  const handleBuyNow = () => {
    if (product) {
      // Track the click and redirect
      window.location.href = `/api/redirect?post_id=${product.id}`
    }
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="error-container">
        <h1>Product Not Found</h1>
        <p>The product you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/feed" className="btn btn-primary">Back to Feed</Link>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} - Buy Now | Afleuncer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={product.description} />
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

          <div className="product-detail">
            <div className="product-image-large">
              <div className="image-placeholder-large">{product.image}</div>
            </div>

            <div className="product-info-detail">
              <h1 className="product-title">{product.name}</h1>
              <p className="product-description">{product.description}</p>
              
              <div className="product-price-large">${product.price}</div>

              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {product.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="creator-recommendation">
                <div className="creator-info">
                  <div className="creator-avatar">{product.creator.avatar}</div>
                  <div className="creator-details">
                    <h4>{product.creator.name} recommends:</h4>
                    <p>&ldquo;{product.creator.post}&rdquo;</p>
                  </div>
                </div>
              </div>

              <div className="purchase-section">
                <button 
                  onClick={handleBuyNow}
                  className="btn btn-buy-large"
                >
                  Buy Now - ${product.price}
                </button>
                
                <div className="ftc-disclosure-large">
                  <small>I may earn a commission if you purchase via this link</small>
                </div>
              </div>
            </div>
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
