const About = () => {
  return (
    <section id="about" className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">The Science Behind OsteoStrong</h2>
            <p className="text-lg text-gray-600 mb-6">
              OsteoStrong uses the scientific principles of osteogenic loading to trigger your body's natural adaptive response to grow bone and muscle tissue. Our proprietary equipment allows you to safely generate forces far beyond what is typically possible in traditional exercise settings.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Just one 15-minute session per week is all that's needed to trigger your body's adaptive response. This brief but effective session is ideal for people of all ages and fitness levels.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://cdn.sanity.io/images/6ff7gi0z/production/230c01892689ba675a3e1d0c5a7860a24ff3c027-2500x1668.webp"
              alt="OsteoStrong equipment"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
