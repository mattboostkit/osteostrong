import author from "./author";
import blockContent from "./blockContent";
import category from "./category";
import facilityGallery from "./facilityGallery";
import faq from "./faq";
import healthCondition from "./healthCondition";
import imageGallery from "./imageGallery";
import pageImage from "./pageImage";
import post from "./post";
import service from "./service";
import siteImage from "./siteImage";
import siteLogo from "./siteLogo";
import teamMember from "./teamMember";
import testimonial from "./testimonial";

export const schemaTypes = [
  // Content types
  post,
  author,
  category,
  healthCondition,
  faq,
  
  // People & testimonials
  testimonial,
  teamMember,
  
  // Services & offerings
  service,
  
  // Media & images
  siteImage,
  siteLogo,
  facilityGallery,
  imageGallery,
  pageImage,
  
  // Utility types
  blockContent,
];
