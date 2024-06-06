import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-20 " style={{ background: 'url("https://i.pinimg.com/originals/b8/02/72/b8027272774cf4a075e1112e4aec20b3.gif") 0% 0%', imageRendering: 'pixelated', filter: 'brightness(80%)', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <div className="p-8 gap-4 grid grid-cols-3 w-1/2 overflow-hidden">
        <div className="border-white border-4">
          <Image
            src={"/img1.webp"}
            height={0}
            width={1000}
            alt='img 1'
            className="h-full object-cover w-full"
          />
        </div>

        <div className="border-white border-4">
          <Image
            src={"/img2.webp"}
            height={0}
            width={1000}
            alt='img 2'
            className="h-full object-cover w-full"
          />
        </div>

        <div className="row-span-2 border-white border-4">
          <Image
            src={"/img4.webp"}
            height={0}
            width={1000}
            alt='img 4'
            className="h-full object-cover w-full"
          />
        </div>

        <div className="border-white border-4">
          <Image
            src={"/img3.webp"}
            height={0}
            width={1000}
            alt='img 3'

            className="h-full object-cover w-full"
          />
        </div>

        <div className="border-white border-4">
          <Image
            src={"/img5.webp"}
            height={0}
            width={1000}
            alt='img 5'
            className="h-full object-cover w-full "
          />
        </div>

      </div>

      <div className="bg-black text-center text-white">
        <h1 className="text-7xl m-4">BUSCA TUS ANIMES</h1>
        <p className="text-5xl m-4 text-green-500"> encuentra tus animes favoritos!</p>
      </div>

    </main>
  );
}
