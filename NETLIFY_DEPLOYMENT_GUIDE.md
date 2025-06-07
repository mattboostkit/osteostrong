# Netlify Deployment Guide for OsteoStrong

## Environment Variables Setup (CRITICAL)

The Sanity connection errors you're seeing are because the environment variables are not set in Netlify. Follow these steps:

### 1. Add Environment Variables in Netlify Dashboard

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site (osteostrongtw.co.uk)
3. Go to **Site configuration** → **Environment variables**
4. Click **Add a variable** and add these EXACTLY as shown:

```
Key: VITE_SANITY_PROJECT_ID
Value: 6ff7gi0z

Key: VITE_SANITY_DATASET  
Value: production

Key: VITE_SANITY_API_VERSION
Value: 2023-05-03
```

### 2. Clear Cache and Redeploy

After adding the environment variables:

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Clear cache and deploy site**

This ensures the new environment variables are used in the build.

### 3. Verify Deployment

Once deployed, check the browser console. You should no longer see:
- URLs with `undefined` in them
- CORS errors
- 403 Forbidden errors

## Important Notes

- Environment variables MUST be prefixed with `VITE_` to be accessible in the client build
- Do NOT add SANITY_TOKEN to client-side variables (security risk)
- The fallback values in the code (6ff7gi0z, production) will work but it's better to set them explicitly
- Always clear cache when changing environment variables

## Troubleshooting

If you still see errors after following these steps:

1. Check that the variable names are EXACTLY as shown (case-sensitive)
2. Make sure there are no extra spaces in the values
3. Verify in Netlify's deploy logs that the variables are being loaded
4. Try a "Clear cache and deploy site" again

## Domain Configuration

Your domain osteostrongtw.co.uk should be configured in:
- Netlify → Domain management → Add custom domain
- Ensure SSL certificate is provisioned (Netlify does this automatically)