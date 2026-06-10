export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern websites using Next.js and React.",
    },
    {
      title: "UI/UX Design",
      description: "Clean and responsive user interfaces.",
    },
    {
      title: "SEO Optimization",
      description: "Improve visibility on search engines.",
    },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}