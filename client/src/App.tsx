import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import Studies from "./pages/Studies";
import StudyDetail from "./pages/StudyDetail";
import Contact from "./pages/Contact";
import BookNow from "@/pages/BookNow";

import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CookiePolicy from "./pages/CookiePolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/utils/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import { LocalBusinessSchema, OrganizationSchema } from "@/components/StructuredData";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/science-and-studies" component={Studies} />
      <Route path="/science-and-studies/:studyId" component={StudyDetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/booknow" component={BookNow} />

      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalBusinessSchema />
      <OrganizationSchema />
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <CookieBanner />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
