import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FiX } from "react-icons/fi";

const items = [
  {
    title: "Vanity Mirror Design",
    category: "Bedroom",
    image: "/gallery/IMG-20251107-WA0015 (1).jpg",
  },
  {
    title: "Custom Headboard",
    category: "Bedroom",
    image: "/gallery/IMG-20251107-WA0025.jpg",
  },
  {
    title: "Illuminated Console",
    category: "Decor",
    image: "/gallery/IMG-20251107-WA0029.jpg",
  },
  {
    title: "Built-in Wardrobe",
    category: "Storage",
    image: "/gallery/IMG-20260128-WA0009.jpg",
  },
  {
    title: "Classic Armchair",
    category: "Living Room",
    image: "/gallery/IMG-20260128-WA0081.jpg",
  },
  {
    title: "Open Kitchen Lounge",
    category: "Living Room",
    image: "/gallery/IMG-20260128-WA0084.jpg",
  },
  {
    title: "Walk-in Dressing",
    category: "Storage",
    image: "/gallery/IMG-20260128-WA0087.jpg",
  },
  {
    title: "Modern Salon",
    category: "Living Room",
    image: "/gallery/IMG-20260128-WA0096.jpg",
  },
  {
    title: "Wood Divider Feature",
    category: "Decor",
    image: "/gallery/IMG-20260128-WA0100.jpg",
  },
  {
    title: "Entryway Unit",
    category: "Decor",
    image: "/gallery/IMG-20260128-WA0102.jpg",
  },
  {
    title: "Glossy Bedroom Console",
    category: "Bedroom",
    image: "/gallery/IMG-20260128-WA0111.jpg",
  },
  {
    title: "TV Wall Unit",
    category: "Living Room",
    image: "/gallery/IMG-20260128-WA0115_resized_20260128_060012222.jpg",
  },
  {
    title: "Workstation Cabinet",
    category: "Office",
    image: "/gallery/IMG-20260128-WA0116_resized_20260128_060011777 (1).jpg",
  },
  {
    title: "Majlis Style Seating",
    category: "Living Room",
    image: "/gallery/IMG_20260128_124010_resized_20260128_060013091.jpg",
  },
  {
    title: "Lounge Set",
    category: "Living Room",
    image: "/gallery/IMG_20260128_124042_resized_20260128_060013277.jpg",
  },
  {
    title: "Wardrobe Detail",
    category: "Storage",
    image:
      "/gallery/Videoframe_20260128_124805_com.huawei.himovie.overseas.jpg",
  },
  {
    title: "Vanity Detail",
    category: "Decor",
    image:
      "/gallery/Videoframe_20260128_124816_com.huawei.himovie.overseas.jpg",
  },
];

const filters = ["All", "Bedroom", "Living Room", "Storage", "Decor", "Office"];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="gallery" className="px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-4xl text-[#2d231d] sm:text-5xl dark:text-[#f5e9dd]">
            Gallery
          </h2>
          <p className="mt-2 text-[#665649] dark:text-[#d7c6b7]">
            Bedroom, Living Room, Storage, Decor, and Office collections curated
            for refined spaces.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-[#b28a63] text-white shadow-soft"
                  : "bg-white/75 text-[#5a4a3e] hover:bg-white dark:bg-[#2a211a] dark:text-[#e8d8ca] dark:hover:bg-[#382d24]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <motion.figure
              key={`${item.title}-${item.image}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={encodeURI(item.image)}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24180f]/70 via-[#24180f]/20 to-transparent" />
              <figcaption className="absolute bottom-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-[#ead4bf]">
                  {item.category}
                </p>
                <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {selectedItem && (
          <div
            role="button"
            tabIndex={0}
            aria-label="Close image preview"
            onClick={() => setSelectedItem(null)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setSelectedItem(null);
              }
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-5 top-5 rounded-full bg-white/90 p-2 text-[#2a211a] transition hover:bg-white"
              aria-label="Close preview"
            >
              <FiX size={20} />
            </button>

            <div
              className="max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={encodeURI(selectedItem.image)}
                alt={selectedItem.title}
                className="max-h-[92vh] w-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
