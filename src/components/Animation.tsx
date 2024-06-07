import Image from "next/image";
import Link from "next/link";

export default function AnimationSection() {
    return (
        <div className=" flex-col flex items-center gap-8">
            <Image
                src={"/chibi.jpg"}
                height={0}
                width={1000}
                alt='chibi xd'
                className="transition-all delay-1000 animate-spin h-80 w-80 rounded-full"
            />
            <div  className="text-black bg-green-500 p-3 rounded-2xl">
                <Link href={'/'}>Volver</Link>
            </div>
        </div>
    )
}