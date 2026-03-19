import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-8 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="mx-auto grid w-full max-w-6xl gap-8 rounded-[2rem] bg-white/75 p-6 shadow-soft dark:bg-[#231c16]/80 md:grid-cols-2 md:p-10"
      >
        <div>
          <h2 className="font-display text-4xl text-[#302621] sm:text-5xl dark:text-[#f5e9dd]">
            Contact FIROMA
          </h2>
          <p className="mt-3 text-[#645449] dark:text-[#dbcabd]">
            Tell us about your project and our team will help you choose the
            perfect furniture setup.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-[#d4c2af] bg-[#fffaf6] px-4 py-3 text-[#362b25] outline-none transition focus:border-[#a98663] dark:border-[#594738] dark:bg-[#2e251e] dark:text-[#f3e7dc]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-[#d4c2af] bg-[#fffaf6] px-4 py-3 text-[#362b25] outline-none transition focus:border-[#a98663] dark:border-[#594738] dark:bg-[#2e251e] dark:text-[#f3e7dc]"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded-xl border border-[#d4c2af] bg-[#fffaf6] px-4 py-3 text-[#362b25] outline-none transition focus:border-[#a98663] dark:border-[#594738] dark:bg-[#2e251e] dark:text-[#f3e7dc]"
            />
            <button
              type="submit"
              className="rounded-full bg-[#b08b65] px-7 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#9f7853]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2e5d7] px-4 py-2 text-sm font-semibold text-[#5e4837] transition hover:bg-[#e2d1bf] dark:bg-[#3a2f25] dark:text-[#f2dfcc] dark:hover:bg-[#4a3c30]"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2e5d7] px-4 py-2 text-sm font-semibold text-[#5e4837] transition hover:bg-[#e2d1bf] dark:bg-[#3a2f25] dark:text-[#f2dfcc] dark:hover:bg-[#4a3c30]"
            >
              <FaFacebookF /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2e5d7] px-4 py-2 text-sm font-semibold text-[#5e4837] transition hover:bg-[#e2d1bf] dark:bg-[#3a2f25] dark:text-[#f2dfcc] dark:hover:bg-[#4a3c30]"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#d5c3b1] dark:border-[#5e4b3c]">
          <iframe
            title="FIROMA Store Location"
            src="https://maps.google.com/maps?q=Casablanca%20Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
