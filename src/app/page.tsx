import Galeri from "@/components/Galeri";
import Hero from "@/components/Hero";
import Surat from "@/components/Surat";

export default function Home() {
  return (
    <main className="relative overflow-hidden pt-22 sm:pt-0">
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-pink-200 via-rose-100 to-rose-300">
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-rose-300/50 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-pink-300/50 blur-3xl" />
      </div>
      <Hero />
      <Galeri />
      <Surat/>
    </main>
  );
}
