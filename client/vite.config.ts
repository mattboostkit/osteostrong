import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";
import path from "path";
// DO NOT import sanityClient here directly to avoid early env var dependency

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/blog',
  '/science-and-studies', // Listing page for studies
  '/booknow',
  '/login',
  '/signup',
  '/terms',
  '/privacy',
  '/cookies',
  '/faq',
];

import { createClient } from "@sanity/client"; // Import createClient directly

export default defineConfig(async ({ mode }) => {
  console.log('[vite.config.ts] Mode:', mode);
  console.log('[vite.config.ts] process.cwd():', process.cwd());
  const env = loadEnv(mode, process.cwd(), '');
  console.log('[vite.config.ts] Loaded env variables:', env);

  if (!env || !env.VITE_SANITY_PROJECT_ID || !env.VITE_SANITY_DATASET) {
    console.error('[vite.config.ts] Critical Sanity environment variables are missing from .env file or not loaded correctly.');
    // Optionally throw an error to halt the build if these are critical
    // throw new Error('Missing Sanity environment variables');
    // For now, we'll let it try and potentially fail in sitemap or client init
  }

  // Set process.env for any parts of the build that might still rely on it (though sanity.ts should use the loaded env)
  // This also helps if any other plugin or part of Vite expects them on process.env
  if (env) {
    process.env.VITE_SANITY_PROJECT_ID = env.VITE_SANITY_PROJECT_ID;
    process.env.VITE_SANITY_DATASET = env.VITE_SANITY_DATASET;
  }

  let sitemapDynamicRoutes: string[] = [...staticRoutes]; // Default to static routes

  try {
    // Create an ad-hoc Sanity client for sitemap generation
    const sanityIoProjectId = env.VITE_SANITY_PROJECT_ID;
    const sanityIoDataset = env.VITE_SANITY_DATASET;

    if (!sanityIoProjectId || !sanityIoDataset) {
      console.error('[vite.config.ts] Sanity project ID or dataset not found in loaded env for sitemap client.');
      throw new Error('Sanity project ID or dataset missing for sitemap client');
    }

    const sitemapSanityClient = createClient({
      projectId: sanityIoProjectId,
      dataset: sanityIoDataset,
      apiVersion: '2024-03-11', // Use a fixed API version
      useCdn: false, // Fetch freshest data for sitemap
    });

    const blogPosts = await sitemapSanityClient.fetch<string[]>(`*[_type == "post" && defined(slug.current) && !(_id in path('drafts.**'))][].slug.current`);
    const studies = await sitemapSanityClient.fetch<string[]>(`*[_type == "peerReviewedStudy" && defined(_id) && !(_id in path('drafts.**'))][]._id`);

    console.log('[vite.config.ts] Fetched blog post slugs for sitemap:', blogPosts);
    console.log('[vite.config.ts] Fetched study IDs for sitemap:', studies);

    const blogRoutes = blogPosts.map((slug: string) => `/blog/${slug}`);
    const studyRoutes = studies.map((id: string) => `/science-and-studies/${id}`);

    sitemapDynamicRoutes = [...staticRoutes, ...blogRoutes, ...studyRoutes];
    console.log('[vite.config.ts] Total routes for sitemap:', sitemapDynamicRoutes.length, sitemapDynamicRoutes);

  } catch (error) {
    console.error('[vite.config.ts] Error fetching dynamic routes for sitemap:', error);
    // sitemapDynamicRoutes remains as staticRoutes in case of error
  }

  return {
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.osteostrongtw.co.uk",
      dynamicRoutes: sitemapDynamicRoutes, // Pass the resolved string[]
      // Optional: Exclude routes
      // exclude: ['/admin/**', '/private-page'],
      // Optional: Change output file name
      // outDir: 'dist', // This is relative to the project root, vite-plugin-sitemap defaults to vite's build.outDir
      // filename: 'sitemap.xml',
      // Optional: Custom transformation for each route
      // transform: async (route) => {
      //   if (route.url.startsWith('/blog/')) {
      //     // Example: Fetch lastmod for blog posts
      //     // const lastmod = await fetchLastmodForBlogPost(route.url);
      //     // return { ...route, lastmod };
      //   }
      //   return route;
      // },
      // Optional: If you need to generate dynamic routes by fetching data (e.g., from Sanity)
      // Refer to vite-plugin-sitemap documentation for advanced dynamic route generation.
      // You might need a separate script to fetch slugs from Sanity and then feed them here.
      // For example:
      // dynamicRoutes: async () => {
      //   const sanityClient = require('./sanityClient'); // your Sanity client instance
      //   const blogPosts = await sanityClient.fetch('*[_type == "post"].slug.current');
      //   const studyPages = await sanityClient.fetch('*[_type == "study"].slug.current');
      //   return [
      //     ...staticRoutes, // defined elsewhere
      //     ...blogPosts.map(slug => `/blog/${slug}`),
      //     ...studyPages.map(slug => `/studies/${slug}`),
      //   ];
      // },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  };
});
