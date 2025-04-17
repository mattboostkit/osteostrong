import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import ContactForm from "@/components/sections/ContactForm";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OsteoStrong | Strengthen Your Bones, Transform Your Life</title>
        <meta name="description" content="OsteoStrong is a non-pharmaceutical, non-invasive solution to build stronger bones, improved muscle strength and balance, and reduced joint and back pain." />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Hero />
      <Introduction />
      <About />
      <Services />
      <Testimonials />
      <Locations />
      <FAQ />
      <CallToAction />
      <ContactForm />
    </>
  );
};

export default Home;
