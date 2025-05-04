import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-[70vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80")',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <motion.div
        className="relative text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ザ・アルデンテ</h1>
        <p className="text-xl md:text-2xl mb-8 italic font-light">
          Al dente since 1993
        </p>
        <button
          onClick={scrollToReservation}
          className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md
            hover:bg-white hover:text-black hover:scale-[1.03] transition-all duration-300"
        >
          ご予約はこちら
        </button>
      </motion.div>
    </section>
  );
};
