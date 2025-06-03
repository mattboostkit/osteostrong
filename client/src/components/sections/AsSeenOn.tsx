const logos = [
  { name: "Forbes", src: "/forbes.svg" },
  { name: "Tony Robbins", src: "/tony-robbins.svg" },
  { name: "TWBM", src: "/twbm.png" },
  { name: "Wealden Times", src: "/wealden-times.png" },
];

const AsSeenOn = () => {
  return (
    <section className="py-12 md:py-16 bg-white"> {/* Changed to bg-white for contrast if previous section is bg-gray-50 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center pt-8">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex justify-center items-center p-4"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name + " logo"}
                className="h-20 w-auto max-w-[200px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
