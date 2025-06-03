const logos = [
  { name: "Tony Robbins", placeholder: "TR" }, // Replace with actual <img> tags
  { name: "Forbes", placeholder: "F" },
  { name: "Los Angeles Times", placeholder: "LAT" },
  { name: "ABC News", placeholder: "ABC" },
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
              {/* Placeholder for actual logo image */}
              {/* Replace this div with your <img src="..." alt={logo.name} /> */}
              <div className="h-12 w-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded">
                {/* For a more visual placeholder, you could use an SVG or just text */}
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
