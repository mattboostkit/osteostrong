import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about OsteoStrong? We're here to help. Reach out to our team for more information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <Card className="md:w-1/2 bg-neutral-100 rounded-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Send Us a Message</h3>

              <div style={{ height: '800px', overflow: 'hidden' }}>
                <iframe
                  src="https://link.boostkit.io/widget/form/G7xk974QpQeHpxosiXrA"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', overflow: 'hidden' }}
                  id="inline-G7xk974QpQeHpxosiXrA"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="OsteoStrong New Site"
                  data-height="800"
                  data-layout-iframe-id="inline-G7xk974QpQeHpxosiXrA"
                  data-form-id="G7xk974QpQeHpxosiXrA"
                  title="OsteoStrong New Site"
                  scrolling="no"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <div className="md:w-1/2">
            <Card className="bg-neutral-100 rounded-xl mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-black"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Visit Us</h4>
                      <p className="text-gray-600">26 High Street</p>
                      <p className="text-gray-600">Tunbridge Wells</p>
                      <p className="text-gray-600">TN1 1UX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-phone text-black"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Phone</h4>
                      <p className="text-gray-600">01892 884444</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-envelope text-black"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Email</h4>
                      <p className="text-gray-600">info@osteostrongtw.co.uk</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-clock text-black"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-secondary">Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold text-secondary mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/osteostrong/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/@OsteoStrongUK" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.tiktok.com/@osteostrongtunbridgewells" target="_blank" rel="noopener noreferrer" className="bg-primary h-10 w-10 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-black mb-6">Company Information</h3>
                <p className="text-gray-600">OsteoStrong Tunbridge Wells</p>
                <p className="text-gray-600">Registered in England & Wales: 14093339</p>
                <p className="text-gray-600">26 High Street, Tunbridge Wells, TN1 1UX</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <script src="https://link.boostkit.io/js/form_embed.js"></script>
    </section>
  );
};

export default ContactForm;
