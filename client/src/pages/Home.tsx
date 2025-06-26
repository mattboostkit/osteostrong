import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import About from "@/components/sections/About";
import FourStepsToStrength from "@/components/sections/FourStepsToStrength";
import VideoTestimonial from "@/components/sections/VideoTestimonial";
import Services from "@/components/sections/Services";
import BoneHealth from "@/components/sections/BoneHealth";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Facility from "@/components/sections/Facility";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import AsSeenOn from "@/components/sections/AsSeenOn";

import CallToAction from "@/components/sections/CallToAction";
import ContactForm from "@/components/sections/ContactForm";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OsteoStrong Tunbridge Wells | Strengthen Your Bones, Transform Your Life</title>
        <meta name="description" content="OsteoStrong Tunbridge Wells offers a non-pharmaceutical, drug-free, non-invasive solution to build stronger bones, improved muscle strength and balance, and reduced joint and back pain in just one 15-minute session per week. We help people with osteoporosis, osteopenia, and osteoarthritis across Kent, including Tunbridge Wells, Tonbridge, and Sevenoaks." />
        <meta name="keywords" content="OsteoStrong, bone health, osteoporosis, osteopenia, osteoarthritis, joint pain, back pain, bone density, medicine-free, drug-free, Tunbridge Wells, Tonbridge, Sevenoaks, Kent, skeletal strength, osteogenic loading" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.osteostrongtw.co.uk/" />
        <meta property="og:title" content="OsteoStrong Tunbridge Wells | Strengthen Your Bones, Transform Your Life" />
        <meta property="og:description" content="OsteoStrong Tunbridge Wells offers a non-pharmaceutical, non-invasive solution to build stronger bones, improved muscle strength and balance, and reduced joint and back pain in just one 15-minute session per week." />
        <meta property="og:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.osteostrongtw.co.uk/" />
        <meta name="twitter:title" content="OsteoStrong Tunbridge Wells | Strengthen Your Bones, Transform Your Life" />
        <meta name="twitter:description" content="OsteoStrong Tunbridge Wells offers a non-pharmaceutical, non-invasive solution to build stronger bones, improved muscle strength and balance, and reduced joint and back pain in just one 15-minute session per week." />
        <meta name="twitter:image" content="https://www.osteostrongtw.co.uk/images/og-image.jpg" />

        {/* Canonical link */}
        <link rel="canonical" href="https://www.osteostrongtw.co.uk/" />

        {/* Fonts and Icons */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* Additional Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FFC843" />
        <meta name="author" content="OsteoStrong Tunbridge Wells" />
        <meta name="geo.region" content="GB-KEN" />
        <meta name="geo.placename" content="Tunbridge Wells" />
      </Helmet>
      <Hero />
      <Introduction />
      <div className="container mx-auto px-4 md:px-6 text-center my-8">
        <p className="text-lg text-gray-700 font-semibold">
          Proudly serving clients from Tunbridge Wells, Tonbridge, Sevenoaks, and all of Kent who are seeking medicine-free, drug-free help for osteoporosis, osteopenia, osteoarthritis, and bone health.
        </p>
      </div>
      <About />
      <FourStepsToStrength />
      <AsSeenOn />

      <VideoTestimonial />
      <Services />
      <BoneHealth />
      <Testimonials />
      <Team />
      <Facility />
      <Locations />
      <FAQ />
      <CallToAction />
      <ContactForm />
    </>
  );
};

export default Home;
