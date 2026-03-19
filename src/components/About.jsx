import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-[2rem] bg-white/70 p-6 shadow-soft backdrop-blur-sm dark:bg-[#221b15]/75 md:grid-cols-2 md:p-10"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#896e56] dark:text-[#d4baa1]">
            About FIROMA
          </p>
          <h2 className="font-display text-4xl text-[#302621] sm:text-5xl dark:text-[#f4e8dd]">
            Crafted for comfort, designed for modern living.
          </h2>
          <p className="mt-5 text-[#66564a] dark:text-[#dccbbd]">
            FIROMA brings together premium materials, timeless forms, and
            ergonomic comfort to create furniture that elevates every room. Each
            collection is carefully finished to blend warmth, durability, and
            contemporary style.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.5rem]">
          <img
            src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80"
            alt="FIROMA furniture showroom"
            className="h-72 w-full object-cover sm:h-80"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
