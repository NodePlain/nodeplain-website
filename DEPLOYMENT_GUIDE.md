# NodePlain Website - Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

Vercel is the best hosting platform for Next.js sites targeting Australian users.

### Why Vercel for Australian ICP?
- **Sydney edge location** - Content served from Australia
- **Sub-100ms** response times for Australian visitors
- **Automatic optimization** - Image optimization, edge caching, compression
- **Zero configuration** - Works out of the box with Next.js
- **Free tier** - Perfect for getting started

---

## Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd "/Users/sj/Documents/Work/NodePlain/NodePlain Website"
git init
git add .
git commit -m "Initial commit: NodePlain website"
```

### 1.2 Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `nodeplain-website` (or your preferred name)
3. **Don't** initialize with README (you already have code)
4. Click "Create repository"

### 1.3 Push to GitHub

```bash
# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/nodeplain-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### 2.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub repos

### 2.2 Import Project

1. Click "Add New" → "Project"
2. Select your GitHub repository: `nodeplain-website`
3. Click "Import"

### 2.3 Configure Project Settings

Vercel will auto-detect Next.js. **No configuration needed** unless you have environment variables.

**If you have environment variables:**
- Add them in the "Environment Variables" section
- Example: `NEXT_PUBLIC_SITE_URL`, API keys, etc.

Click **"Deploy"**

### 2.4 Wait for Deployment

- First build takes ~2-3 minutes
- Vercel will show build logs in real-time
- Once complete, you'll get a live URL: `https://nodeplain-website.vercel.app`

---

## Step 3: Connect Custom Domain

### 3.1 Add Your Domain in Vercel

1. Go to your project → **Settings** → **Domains**
2. Add your domain: `nodeplain.com.au` (or whatever you own)
3. Vercel will show DNS configuration instructions

### 3.2 Configure DNS

**If using Vercel nameservers (easiest):**
- Point your domain's nameservers to Vercel's
- Vercel handles everything (SSL, redirects, etc.)

**If using your own DNS provider (e.g., Cloudflare, Route53):**

Add these DNS records:

**For apex domain (nodeplain.com.au):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3.3 Verify & Enable HTTPS

- Vercel automatically provisions SSL certificates (Let's Encrypt)
- Wait 5-10 minutes for DNS propagation
- Your site will be live at `https://nodeplain.com.au`

---

## Step 4: Performance Optimization for Australia

### 4.1 Verify Edge Location

1. Open DevTools → Network tab
2. Visit your site: `https://nodeplain.com.au`
3. Look for response header: `x-vercel-cache: HIT` (means served from edge)
4. Check: `x-vercel-id: syd1::xxxxx` (syd1 = Sydney region)

### 4.2 Enable Next.js Image Optimization

Your site already uses Next.js `<Image>` components, which automatically:
- Serve WebP/AVIF to supported browsers
- Lazy load images
- Resize images to viewport size

**Verify it's working:**
- Check any image in DevTools → Network
- URL should be: `/_next/image?url=...&w=...&q=75`

### 4.3 Enable Analytics (Optional)

Vercel provides **free** Web Vitals monitoring:

1. Go to project → **Analytics** tab
2. Enable "Web Vitals"
3. See real-time performance metrics from Australian visitors

---

## Step 5: Continuous Deployment

### 5.1 Automatic Deploys

Every time you push to `main` branch, Vercel auto-deploys:

```bash
# Make changes to your site
git add .
git commit -m "Update: Add new blog post"
git push

# Vercel automatically builds and deploys
# Live in ~2 minutes
```

### 5.2 Preview Deployments

**Every pull request gets a preview URL:**
- Create a new branch: `git checkout -b feature/new-page`
- Push changes: `git push origin feature/new-page`
- Open PR on GitHub
- Vercel comments with preview URL: `https://nodeplain-website-git-feature-new-page.vercel.app`

**Perfect for:**
- Testing changes before going live
- Showing clients preview of updates
- A/B testing new pages

---

## Alternative: Netlify (Also Great)

If you prefer Netlify over Vercel:

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import from Git"
4. Select your repo
5. Build settings (auto-detected):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy"

**Netlify edge locations:**
- Sydney edge node available
- Similar performance to Vercel for Australian users

---

## Performance Benchmarks (Expected)

### Lighthouse Scores (Australian visitors)
- **Performance:** 95-100
- **First Contentful Paint:** <1s
- **Largest Contentful Paint:** <1.5s
- **Time to Interactive:** <2s

### Why So Fast?
1. **Edge caching** - Static assets served from Sydney
2. **Next.js SSG** - Pre-rendered pages (no server round-trip)
3. **Image optimization** - WebP/AVIF, lazy loading, responsive sizes
4. **Tailwind CSS** - Minimal CSS bundle (~20KB gzipped)
5. **Code splitting** - Only load JS needed for current page

---

## Environment Variables (If Needed)

If your site uses API keys or secrets, add them in Vercel:

### Example: GoHighLevel Calendar Embed

```bash
# In Vercel dashboard → Settings → Environment Variables
NEXT_PUBLIC_GHL_CALENDAR_URL=https://api.leadconnectorhq.com/widget/booking/...
```

Then use in your code:
```typescript
const calendarUrl = process.env.NEXT_PUBLIC_GHL_CALENDAR_URL;
```

---

## Monitoring & Maintenance

### 1. Vercel Analytics (Free)
- **Web Vitals** - Real User Monitoring (RUM)
- **Page views** - Traffic analytics
- **Device breakdown** - Desktop/mobile split

### 2. Google Search Console
- Add your domain: `https://search.google.com/search-console`
- Submit sitemap: `https://nodeplain.com.au/sitemap.xml`
- Monitor Australian search performance

### 3. Uptime Monitoring
- Use [UptimeRobot](https://uptimerobot.com) (free)
- Ping your site every 5 minutes
- Get alerts if site goes down

---

## Cost Breakdown

### Vercel Pricing (for NodePlain scale)

**Free Tier (Hobby):**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Custom domains
- ✅ SSL certificates
- ✅ Edge network (Sydney)
- ✅ Automatic HTTPS

**Expected traffic:**
- 5,000 visitors/month = ~15GB bandwidth
- **Cost: $0/month** (well within free tier)

**When to upgrade to Pro ($20/month):**
- >10,000 visitors/month
- Need password protection for staging
- Want advanced analytics

### Domain Cost
- `.com.au` domain: ~$15-30/year (register with Namecheap, Cloudflare, or Ventraip)

**Total first year cost: ~$15-30** (just domain, hosting is free)

---

## Troubleshooting

### Build Fails on Vercel

**Error: "Module not found"**
```bash
# Fix: Ensure all dependencies are in package.json
npm install
git add package.json package-lock.json
git commit -m "Fix: Update dependencies"
git push
```

### Images Not Loading

**Error: "Image optimization error"**
- Check image paths are relative to `public/` folder
- Verify Next.js `<Image>` component is used (not `<img>`)

### Slow Load Times in Australia

**Check edge location:**
1. Run: `curl -I https://nodeplain.com.au`
2. Look for: `x-vercel-id: syd1::xxxxx`
3. If not `syd1`, contact Vercel support (rare issue)

---

## Quick Deploy Checklist

- [ ] Git repository initialized
- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] First deployment successful (check live URL)
- [ ] Custom domain configured
- [ ] DNS records updated
- [ ] SSL certificate active (https:// works)
- [ ] Test site from Australia (VPN or ask friend)
- [ ] Analytics enabled (optional)
- [ ] Sitemap submitted to Google Search Console

---

## Next Steps After Deployment

1. **Set up Google Analytics**
   - Track Australian visitor behavior
   - Monitor conversion rates

2. **Submit to Search Engines**
   - Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)
   - Bing Webmaster Tools: [bing.com/webmasters](https://www.bing.com/webmasters)

3. **Monitor Core Web Vitals**
   - Use Vercel Analytics
   - Aim for all green scores

4. **Set up Email (if needed)**
   - Use [Resend](https://resend.com) or [SendGrid](https://sendgrid.com) for transactional emails
   - Forward `hello@nodeplain.com.au` to your email

---

## Summary

**Fastest path to deployment:**
1. Push code to GitHub (5 min)
2. Import to Vercel (2 min)
3. Deploy (3 min)
4. Connect domain (10 min)

**Total time: ~20 minutes from local to live** 🚀

**Your Australian visitors will experience:**
- <1s initial load time
- 95+ Lighthouse performance score
- Content served from Sydney edge

---

**Need help?** Check the Vercel docs: [vercel.com/docs](https://vercel.com/docs)
