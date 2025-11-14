"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Galeri() {
  const photos = [
    { src: "/galeri/1.jpg", caption: "ANJAII PHOTOBOOTH 😍" },
    { src: "/galeri/2.jpg", caption: "Ke prolog nieeee.." },
    { src: "/galeri/3.jpg", caption: "Fotbar pertama kita ☀️" },
    {
      src: "/galeri/4.jpg",
      caption: "Pap pertama kamu buat aku (seinget aku)",
    },
    { src: "/galeri/5.jpg", caption: "Speechless.. 😵" },
    { src: "/galeri/6.jpg", caption: "Cantiikk make hoodie akuu 🌷" },
    { src: "/galeri/7.jpg", caption: "Betapa imupppnyaa kamuuuu" },
    { src: "/galeri/8.jpg", caption: "Menggodanya kamuuu 🍓" },
  ];

  return (
    <section id="galeri" className="relative py-20 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 text-center">
        <motion.h2
          className="font-inter text-3xl md:text-4xl text-rose-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Your Beautiful Pictures 💞
        </motion.h2>

        <motion.p
          className="mt-2 text-rose-900/70 italic"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ada aku jugaaa hehe
        </motion.p>
        
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.src}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ amount: 0.25 }} 
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -6 }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                width={600}
                height={600}
                className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-rose-900/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                <p className="text-white text-sm md:text-base p-3 bg-linear-to-t from-black/50 w-full text-left font-inter">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
