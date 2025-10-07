# Afleuncer Demo Site

A Next.js website for Sovrn publisher registration to demonstrate the Afleuncer mobile app.

## Features

- **Landing Page**: App branding, features, and navigation
- **Demo Feed**: 3 example product posts with FTC disclosures
- **About Page**: Staging notice and contact information
- **Privacy Policy**: Template privacy policy for affiliate marketing
- **Click Tracking**: Next.js API route with redirect endpoint `/api/redirect`
- **Mobile-First Design**: Responsive CSS with modern UI
- **TypeScript Support**: Full type safety and better development experience

## Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Access the Demo**:
   - Website: http://localhost:3000
   - API Endpoint: http://localhost:3000/api/redirect

## Click Tracking

The API includes a redirect endpoint `/api/redirect` that:
- Generates unique click IDs for each request
- Logs click data (ID, post_id, timestamp, IP, user-agent) to console
- Redirects to placeholder Sovrn affiliate URLs
- Appends click_id as `subId` parameter

### Example Click Logs:
```
🔗 CLICK TRACKED: {
  "click_id": "123e4567-e89b-12d3-a456-426614174000",
  "post_id": "earbuds-001", 
  "timestamp": "2024-12-19T10:30:00",
  "ip_address": "192.168.1.100",
  "user_agent": "Mozilla/5.0...",
  "referer": "http://localhost:3000/feed"
}
```

## Demo Products

- **earbuds-001**: Premium Wireless Earbuds ($89.99)
- **keyboard-002**: Ergonomic Mechanical Keyboard ($149.99)  
- **yogamat-003**: Eco-Friendly Yoga Mat ($59.99)

## FTC Compliance

All product posts include the required disclosure:
> "I may earn a commission if you purchase via this link"

## Next Steps for Production

1. **Database Integration**: Replace console logging with database storage
2. **Sovrn API Integration**: Connect to actual Sovrn affiliate network
3. **User Authentication**: Add creator login and account management
4. **Analytics Dashboard**: Real-time click tracking and commission reports
5. **Content Management**: Dynamic post creation and editing

## File Structure

```
├── pages/
│   ├── _app.tsx         # Next.js app component
│   ├── index.tsx        # Landing page
│   ├── feed.tsx         # Demo product feed
│   ├── about.tsx        # About/contact page
│   ├── privacy.tsx      # Privacy policy
│   └── api/
│       └── redirect.ts  # API route for redirects
├── styles/
│   └── globals.css      # Global CSS styles
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```
