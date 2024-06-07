'use client';
import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row max-md:flex-col-reverse max-md:p-2 items-center justify-between p-20" style={{ background: 'url("https://i.pinimg.com/originals/b8/02/72/b8027272774cf4a075e1112e4aec20b3.gif") 0% 0%', imageRendering: 'pixelated', filter: 'brightness(80%)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <div className="p-8 gap-4 grid grid-cols-1 md:grid-cols-3 w-full overflow-hidden md:w-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="border-white border-4">
          <Image
            src={"/img1.webp"}
            height={0}
            width={1000}
            alt='img 1'
            className="h-full object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="border-white border-4">
          <Image
            src={"/img2.webp"}
            height={0}
            width={1000}
            alt='img 2'
            className="h-full object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="row-span-2 border-white border-4">
          <Image
            src={"/img4.webp"}
            height={0}
            width={1000}
            alt='img 4'
            className="h-full object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="border-white border-4">
          <Image
            src={"/img3.webp"}
            height={0}
            width={1000}
            alt='img 3'
            className="h-full object-cover w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="border-white border-4">
          <Image
            src={"/img5.webp"}
            height={0}
            width={1000}
            alt='img 5'
            className="h-full object-cover w-full "
          />
        </motion.div>

      </div>

      <motion.div
        className="bg-black text-center text-white rounded-xl mt-8 md:mt-0 md:ml-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: 'linear',
        }}
      >
        <h1 className="text-4xl md:text-7xl m-4">BUSCA TUS ANIMES</h1>
        <p className="text-3xl md:text-5xl m-4 text-green-500">Encuentra tus animes favoritos!</p>
      </motion.div>

    </main>

  );
}
