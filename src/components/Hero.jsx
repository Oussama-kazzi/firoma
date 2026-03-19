import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 md:pb-24 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.75),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(190,162,130,0.32),transparent_45%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#7a6450] dark:text-[#d2bda9]">
            Maison by Firoma
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-[#2f2520] sm:text-6xl md:text-7xl dark:text-[#f8ece0]">
            FIROMA Furniture
          </h1>
          <p className="mt-5 max-w-xl text-base text-[#5f4f43] sm:text-lg dark:text-[#dac9ba]">
            Modern &amp; Elegant Furniture for Your Home
          </p>
          <a
            href="#gallery"
            className="mt-8 inline-flex items-center rounded-full bg-[#b28a63] px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#9f7a56]"
          >
            Explore Collection
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src="/gallery/IMG_20260128_124042_resized_20260128_060013277.jpg"
              alt="FIROMA living room interior"
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d2016]/35 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
