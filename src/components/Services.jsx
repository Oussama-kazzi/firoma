import { motion } from "framer-motion";
import { FiHome, FiPenTool, FiTruck, FiTool } from "react-icons/fi";

const services = [
  {
    title: "Custom Furniture",
    description: "Tailored pieces designed to match your space and lifestyle.",
    icon: FiHome,
  },
  {
    title: "Interior Consultation",
    description:
      "Personalized layout and styling guidance from our design team.",
    icon: FiPenTool,
  },
  {
    title: "Home Delivery",
    description: "Safe and timely delivery service with real-time support.",
    icon: FiTruck,
  },
  {
    title: "Installation",
    description: "Professional setup and finishing for a flawless result.",
    icon: FiTool,
  },
];

function Services() {
  return (
    <section id="services" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="text-center font-display text-4xl text-[#2d231d] sm:text-5xl dark:text-[#f5e9dd]"
        >
          Our Services
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[#69594c] dark:text-[#dcccbf]">
          Complete support from concept to installation, crafted around your
          home.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl bg-white/80 p-6 shadow-soft transition hover:-translate-y-1 hover:bg-white dark:bg-[#241d17]/85 dark:hover:bg-[#2a211a]"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-[#efe2d3] p-3 text-[#7f634c] transition group-hover:bg-[#dac2a9] dark:bg-[#3a2f25] dark:text-[#ecd8c4] dark:group-hover:bg-[#4a3b2f]">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-2xl text-[#342922] dark:text-[#f5eade]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#6d5d51] dark:text-[#d7c6b7]">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
