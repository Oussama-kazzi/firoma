import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-[#f6eee5]/85 backdrop-blur-lg transition-colors dark:border-white/10 dark:bg-[#17130f]/85">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          className="font-display text-2xl font-semibold tracking-widest"
        >
          FIROMA
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-[#58493d] transition hover:text-[#201711] dark:text-[#d8c8b6] dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button
            type="button"
            aria-label="toggle dark mode"
            onClick={() => setDarkMode((prev) => !prev)}
            className="rounded-full border border-[#baa38c] p-2 text-[#6b5643] transition hover:-translate-y-0.5 hover:bg-[#e8dacb] dark:border-[#7b6958] dark:text-[#e7d7c8] dark:hover:bg-[#332a22]"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <button
          type="button"
          aria-label="toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md p-2 text-[#6b5643] transition hover:bg-[#ebdfd1] md:hidden dark:text-[#ebdccc] dark:hover:bg-[#2e241c]"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/40 bg-[#f6eee5] px-5 py-4 md:hidden dark:border-white/10 dark:bg-[#17130f]">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-[#58493d] transition hover:bg-[#ecdfd1] dark:text-[#d8c8b6] dark:hover:bg-[#2c221a]"
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="mt-1 inline-flex items-center gap-2 rounded-md border border-[#baa38c] px-3 py-2 text-sm font-semibold text-[#5a4534] dark:border-[#7b6958] dark:text-[#e7d7c8]"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
