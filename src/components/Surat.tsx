"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type TypingParagraphProps = {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
};

function TypingParagraph({
  text,
  className,
  speed = 35,
  startDelay = 0,
}: TypingParagraphProps) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, {
    margin: "-80px",
  });

  useEffect(() => {
    let index = 0;
    let typingId: number | undefined;

    if (!inView) {
      setDisplayed("");
      return;
    }

    const startTimeout = window.setTimeout(() => {
      const type = () => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index < text.length) {
          typingId = window.setTimeout(type, speed);
        }
      };
      type();
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      if (typingId) window.clearTimeout(typingId);
    };
  }, [inView, text, speed, startDelay]);

  return (
    <p ref={ref} className={className}>
      {displayed}
      {displayed.length < text.length && inView && (
        <span className="inline-block w-[0.4ch] translate-y-px animate-pulse">
          |
        </span>
      )}
    </p>
  );
}

export default function Surat() {
  const paragraphs = [
    "Selamat ulang tahun, sayanggkuuu. Makasiii udaa hadir dan bikin hari-hari aku lebii hangat dari sebelumnya. Aku bangga sama kamu dengan semua usaha kecil yang mungkin orang lain ga notice, tapi aku notice semuanya. 🌷",
    "Semoga tahun ini dan ke depannya bawa kamu ke hal-hal baik yang kamu harapkan. Kalo nanti ada hari yang berat, ingat ya kamu gak sendirian. Ada aku, selalu mau jadi tempat istirahat kamu.",
    "Makasii udaa jadi rumaa yang nyaman buat hati aku. Semoga web kecil ini bisa bikin kamu senyum lebih lama hari ini. ❤️",
  ];

  const TOTAL_TYPING_DURATION = 9000;
  const START_DELAY = 400;

  return (
    <motion.section
      id="surat"
      className="relative py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute left-0 top-32 w-40 h-40 bg-rose-300/30 rounded-full blur-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute left-20 top-72 text-rose-400/60 text-5xl"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        ❤️
      </motion.div>
      <motion.div
        className="absolute right-0 top-44 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="absolute right-20 top-80 text-rose-500/60 text-5xl"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        ✨
      </motion.div>

      <div className="relative mx-auto max-w-3xl px-4 md:px-6">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-inter text-rose-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          A Little Letter For You 💌
        </motion.h2>

        <motion.p
          className="mt-2 text-center text-rose-900/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ditulis dari hati, khusus di hari spesial kamuuu.
        </motion.p>

        <motion.article
          className="mt-8 rounded-3xl border border-rose-200 bg-white/80 backdrop-blur shadow-xl p-6 md:p-10 leading-relaxed text-rose-900"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <header className="mb-6">
            <motion.p
              className="text-sm text-rose-900/60"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              15 November 2025
            </motion.p>
            <motion.p
              className="text-lg md:text-xl font-inter mt-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.7 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Untuk: <span className="text-rose-700">Annaa</span>
            </motion.p>
          </header>

          <div className="space-y-4 text-base md:text-lg">
            {paragraphs.map((text, idx) => (
              <TypingParagraph
                key={idx}
                text={text}
                startDelay={START_DELAY}
                speed={TOTAL_TYPING_DURATION / text.length}
              />
            ))}
          </div>

          <motion.footer
            className="mt-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.7 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p className="text-right text-base md:text-lg">
              Dengan penuh cinta,
              <br />
              <motion.span
                className="font-inter text-rose-700 inline-block"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                Amoo
              </motion.span>
            </p>
          </motion.footer>
        </motion.article>

        <motion.div
          className="mt-6 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.7 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.a
            href="#galeri"
            className="rounded-2xl border border-rose-300 bg-white px-4 py-2 text-sm font-inter text-rose-700 hover:bg-rose-50 transition"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Balik ke Galeri
          </motion.a>
          <motion.a
            href="#hero"
            className="rounded-2xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700 transition"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Ke Atas ↑
          </motion.a>
        </motion.div>
      </div>
      <div className="text-center mt-14 italic font-semibold opacity-50">
        HAHAHA!! MAAP KETAWA DIKIT
      </div>
    </motion.section>
  );
}
