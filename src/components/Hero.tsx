"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen md:min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="inline-block rounded-full border border-rose-300/60 bg-white/60 px-3 py-1 text-xs font-inter text-rose-700 shadow-sm backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            15 November • Special For You
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-inter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Happy Birthday,{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-600 to-pink-600">
              Annaakuuu
            </span>
            !!
          </motion.h1>

          <motion.p
            className="mt-4 text-base md:text-lg text-rose-900/80 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Ini ulang tahun kamu ke-18, sayangg. Semoga harapan dan keinginan
            kamu terwujud yaa, ✨
            <span className="italic font-light">aku bantu doain dehh.</span>
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <motion.a
              href="#galeri"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-inter shadow-md bg-rose-600 text-white hover:bg-rose-700 transition"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Lihat Galeri
            </motion.a>
            <motion.a
              href="#surat"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-inter border border-rose-300 bg-white/70 text-rose-700 hover:bg-white transition backdrop-blur"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Baca Surat 💌
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-10 hidden md:flex items-center gap-2 text-rose-900/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="h-5 w-5 rounded-full border-2 border-rose-400 flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-rose-400 animate-ping" />
            </span>
            <span className="text-sm">Scroll dong</span>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
        >
          <motion.div
            className="mx-auto h-80 w-[320px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] rounded-3xl border border-pink-200/70 bg-white/70 shadow-xl backdrop-blur overflow-hidden"
            whileHover={{ scale: 1.02, rotate: -1.2 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            <Image
              src="/hero/hero.jpg"
              alt="Birthday girl"
              width={960}
              height={960}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-3 right-20 rounded-2xl bg-rose-600 text-white text-xs font-inter px-3 py-2 shadow-lg"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            Cantiikk bgtt cewe akuuu 💝
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="pointer-events-none absolute left-6 top-30 text-5xl"
        animate={{ y: [0, -6, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-10 bottom-12 text-5xl"
        animate={{ y: [0, 6, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
    </section>
  );
}
