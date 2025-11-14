"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 8) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className={`w-full h-20 shadow-black/30 backdrop-blur flex items-center transition-colors duration-300 ${
          scrolled
            ? "bg-linear-to-r from-pink-400 to-rose-500 shadow-md"
            : "bg-linear-to-r from-pink-300 to-rose-400 shadow-sm"
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 flex items-center justify-between">
          <motion.h1
            className="font-great text-2xl md:text-3xl rounded-2xl px-2 py-1"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Untuk Annaaku 💖
          </motion.h1>

          <motion.h1
            className="font-great text-[20px] md:text-2xl rounded-2xl px-2 py-1 underline"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            Eighteen
          </motion.h1>

          <div className="hidden md:flex items-center gap-8 lg:gap-12 font-great text-3xl">
            {[
              { href: "#hero", label: "Hero" },
              { href: "#galeri", label: "Galeri" },
              { href: "#surat", label: "Surat" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-3xl hover:bg-rose-300/50 hover:shadow-sm transition duration-300"
                whileHover={{ y: -2, scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl transition"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {open ? "❌" : "☰"}
            </motion.span>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-linear-to-r from-pink-200 to-rose-400"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="mx-auto max-w-7xl px-4 pb-3 pt-2 flex flex-col gap-2 font-great text-xl">
              {[
                { href: "#hero", label: "Hero" },
                { href: "#galeri", label: "Galeri" },
                { href: "#surat", label: "Surat" },
              ].map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 rounded-2xl hover:bg-pink-300 transition"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="pointer-events-none absolute -top-6 left-50 rotate-12 select-none"
        animate={{ y: [0, 6, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-4xl">🌸</span>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-3 right-3 rotate-6 select-none"
        animate={{ y: [0, -6, 0], rotate: [6, 0, 6] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-3xl">🌺</span>
      </motion.div>
    </motion.header>
  );
}
