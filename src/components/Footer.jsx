function Footer() {
  return (
    <footer className="border-t border-white/40 px-5 py-8 sm:px-8 dark:border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-[#6b5a4d] sm:flex-row dark:text-[#dac8b8]">
        <p>© {new Date().getFullYear()} FIROMA. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="transition hover:text-[#2a1e16] dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#services"
            className="transition hover:text-[#2a1e16] dark:hover:text-white"
          >
            Services
          </a>
          <a
            href="#contact"
            className="transition hover:text-[#2a1e16] dark:hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
