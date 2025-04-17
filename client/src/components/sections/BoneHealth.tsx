import React from "react";

const BoneHealth = () => {
  return (
    <section id="bone-health" className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Revolutionising Natural Bone Health in the UK
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-black mb-4 text-lg">
                OsteoStrong is the global leader in skeletal strengthening systems. So we are
                delighted to launch in the UK with our flagship OsteoStrong centre in Royal
                Tunbridge Wells. Your local centre is the latest in a global network of over 220
                worldwide.
              </p>
              <p className="text-black mb-4 text-lg">
                And we've arrived at a crucial time. Low bone density, joint pain, and muscle-
                related conditions continue to rise, increasing the risk of osteoporosis, fractures,
                and reduced mobility. OsteoStrong provides a proven, natural, and non-invasive
                solution to tackle these challenges directly. We use advanced technology to
                enhance your bone strength, muscle function, and balance, giving you the power
                to take proactive steps towards a pain-free, healthier, and more active life.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
                <p className="text-primary font-bold text-base sm:text-xl">
                  50% of people who break a hip will not recover their full mobility, and 30% will
                  die within a year
                </p>
              </div>

              <div className="bg-neutral-800 p-4 sm:p-6 rounded-lg shadow-md">
                <p className="text-primary font-bold text-base sm:text-xl">
                  Placing strategic stress on your skeletal system will increase bone strength at
                  any age
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-black text-lg">
              Whether you're looking to improve your muscular and skeletal strength, counter
              the effects of ageing, or improve your everyday performance, OsteoStrong offers
              a personalised experience for all ages and abilities. With just minutes a week, you
              can redefine your limits - no sweat required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoneHealth;
