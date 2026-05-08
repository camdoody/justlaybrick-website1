# Brickyard Website (justlaybrick.com)

Modern, custom rebuild of justlaybrick.com built with React + Vite. No more Squarespace!

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment Options

### Deploy to Vercel (Recommended - 2 minutes)

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite - just click "Deploy"
6. Done! You'll get a URL like `brickyard.vercel.app`
7. Add your custom domain in Vercel settings

**Custom Domain Setup:**
- In Vercel: Settings → Domains → Add `justlaybrick.com`
- In your domain registrar (GoDaddy, Namecheap, etc):
  - Add A record: `76.76.21.21`
  - Add CNAME record: `www` → `cname.vercel-dns.com`

### Deploy to Netlify (Alternative)

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Add custom domain in Site settings → Domain management

### Manual Deployment (Any Static Host)

```bash
# Build the site
npm run build

# Upload the 'dist' folder to:
# - AWS S3 + CloudFront
# - DigitalOcean Spaces
# - GitHub Pages
# - Any static file host
```

## 📁 Project Structure

```
justlaybrick-website/
├── public/
│   └── brickyard-logo.png          # Logo image
├── src/
│   ├── main.jsx                    # React entry point
│   └── justlaybrick-website.jsx   # Main application
├── index.html                      # HTML entry
├── package.json                    # Dependencies
├── vite.config.js                 # Build config
└── README.md                       # This file
```

## 🎨 Features

- **Single Page App** - Fast, smooth navigation
- **Fully Responsive** - Mobile, tablet, desktop
- **Bold Brand Identity** - Black & orange Brickyard aesthetic
- **Zero Squarespace Fees** - Save $200-500/year
- **Lightning Fast** - Static site = instant loads
- **Easy Updates** - Edit the React component directly

## 🔧 Making Updates

### Update Content

Edit `src/justlaybrick-website.jsx`:

```javascript
// Change navigation
const navigation = [
  { name: 'HOME', page: 'home' },
  // Add/remove pages here
];

// Update portfolio companies
const companies = [
  { num: 54, name: 'Your New Company', ... },
];
```

### Update Styling

All styles are inline in the React component. Search for:
- `#F7931E` - Orange accent color
- `#000000` - Black background
- Font sizes, spacing, etc.

### Add New Pages

1. Create a new page component (like `AboutPage`)
2. Add it to navigation array
3. Add route in main render section

## 🌐 SEO & Analytics

### Add Google Analytics

In `index.html`, add before `</head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Update Meta Tags

Edit `index.html` to customize:
- Page title
- Meta description
- Open Graph tags (for social sharing)

## 💰 Cost Comparison

**Before (Squarespace):**
- $192-576/year subscription
- Limited customization
- Slower performance
- Vendor lock-in

**After (Vercel/Netlify):**
- $0-20/month (free tier covers most sites)
- Complete control
- Lightning fast
- Modern tech stack

## 🐛 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Logo not showing?**
- Make sure `brickyard-logo.png` is in `public/` directory
- Check the file path in the React component

**Styles look wrong?**
- Clear browser cache
- Check for JavaScript errors in console
- Verify all dependencies installed

## 📞 Support

Questions? Check:
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

---

Built with 🧱 by Brickyard
