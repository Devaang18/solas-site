# Vercel Deployment Guide

## 🚀 Deploy Your Solas Website to Vercel

### Prerequisites
- GitHub account
- Vercel account (free)
- Your SMTP credentials ready

## Step 1: Prepare Your Code

### 1.1 Commit Your Changes
```bash
git add .
git commit -m "Ready for deployment - SMTP configured"
git push origin main
```

### 1.2 Verify Build Works Locally
```bash
npm run build
```
*Make sure this completes without errors*

## Step 2: Deploy to Vercel

### 2.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Import your GitHub repository

### 2.2 Import Project
1. Click "New Project"
2. Import your Solas Website repository
3. Vercel will auto-detect it's a Next.js project
4. Click "Deploy"

### 2.3 Configure Environment Variables
In your Vercel dashboard:

1. Go to your project → Settings → Environment Variables
2. Add these variables:

```
SMTP_HOST = your-smtp-host.com
SMTP_PORT = 587
SMTP_USER = your-email@domain.com
SMTP_PASS = your-smtp-password
```

3. Make sure to add them for **Production**, **Preview**, and **Development**
4. Click "Save"

### 2.4 Redeploy
After adding environment variables:
1. Go to "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"

## Step 3: Test Your Live Site

### 3.1 Verify Deployment
- Your site will be available at: `https://your-project-name.vercel.app`
- Test all pages load correctly
- Test the demo form at `/demo`

### 3.2 Test Email Functionality
1. Go to your live site's `/demo` page
2. Fill out the form with test data
3. Check if email arrives at `neil@solascompliance.com`
4. Check Vercel function logs for any errors

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. Go to Settings → Domains
2. Add your custom domain (e.g., `solascompliance.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

## Step 5: Monitor and Maintain

### 5.1 Monitor Performance
- Check Vercel Analytics
- Monitor function execution logs
- Set up error alerts if needed

### 5.2 Update Environment Variables
- Always update in Vercel dashboard when changing SMTP settings
- Redeploy after environment variable changes

## Troubleshooting

### Common Issues:

**Build Fails:**
- Check for TypeScript errors: `npm run build`
- Ensure all dependencies are in `package.json`

**Email Not Working:**
- Verify environment variables in Vercel dashboard
- Check function logs in Vercel dashboard
- Test SMTP credentials locally first

**Domain Issues:**
- Check DNS settings
- Wait for SSL certificate (can take up to 24 hours)

## Vercel Benefits for Your Project

✅ **Automatic HTTPS** - SSL certificates included
✅ **Global CDN** - Fast loading worldwide
✅ **Automatic Deployments** - Deploy on every git push
✅ **Environment Variables** - Secure credential management
✅ **Function Logs** - Easy debugging
✅ **Custom Domains** - Professional URLs
✅ **Free Tier** - Perfect for your needs

## Next Steps After Deployment

1. **Test thoroughly** on the live site
2. **Set up monitoring** for email functionality
3. **Configure custom domain** if needed
4. **Set up analytics** (Google Analytics, etc.)
5. **Regular backups** of your code

Your Solas website will be live and professional! 🎉
