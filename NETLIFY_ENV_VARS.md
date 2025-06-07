# Netlify Environment Variables Setup

To connect your Netlify deployment to Sanity, you need to add these environment variables in your Netlify dashboard:

1. Go to your Netlify dashboard
2. Navigate to Site Settings > Environment Variables
3. Add the following variables:

```
VITE_SANITY_PROJECT_ID=6ff7gi0z
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2023-05-03
```

**Important Notes:**
- These must be prefixed with `VITE_` to be accessible in the client build
- Do NOT add the SANITY_TOKEN to client-side environment variables as it's a security risk
- The token should only be used server-side if needed

After adding these variables, trigger a new deploy in Netlify for the changes to take effect.