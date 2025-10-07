import { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

// Placeholder Sovrn affiliate URLs for demo
const SOVRN_AFFILIATE_URLS = {
  "earbuds-001": "https://example-sovrn.com/affiliate/earbuds?subId={click_id}",
  "keyboard-002": "https://example-sovrn.com/affiliate/keyboard?subId={click_id}",
  "yogamat-003": "https://example-sovrn.com/affiliate/yogamat?subId={click_id}",
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { post_id } = req.query
    
    if (!post_id) {
      return res.status(400).json({ error: 'Missing post_id parameter' })
    }

    // Generate unique click ID
    const click_id = uuidv4()
    
    // Get client information
    const client_ip = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.connection?.remoteAddress || 
                     'unknown'
    
    const user_agent = req.headers['user-agent'] || 'unknown'
    const referer = req.headers.referer || 'direct'
    const timestamp = new Date().toISOString()
    
    // Log click tracking data
    const log_data = {
      click_id,
      post_id,
      timestamp,
      ip_address: client_ip,
      user_agent,
      referer
    }
    
    console.log('🔗 CLICK TRACKED:', JSON.stringify(log_data, null, 2))
    
    // Get the Sovrn affiliate URL for this post
    if (!SOVRN_AFFILIATE_URLS[post_id as string]) {
      console.warn(`Unknown post_id: ${post_id}`)
      return res.status(404).json({ error: 'Product not found' })
    }
    
    // Format the affiliate URL with the click ID as subId
    const affiliate_url = SOVRN_AFFILIATE_URLS[post_id as string].replace('{click_id}', click_id)
    
    // Redirect to the Sovrn affiliate URL
    res.redirect(302, affiliate_url)
    
  } catch (error) {
    console.error('Error in redirect endpoint:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
