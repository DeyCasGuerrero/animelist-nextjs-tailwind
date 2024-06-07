import Image from "next/image";
import Link from "next/link";

function NavBar(){
    return (
        <nav className={`bg-black h-20 flex items-center p-4`}>
            <div className="">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    height={0}
                    width={100}
                    className="rounded-lg h-16 bg-white shadow-2xl"
                />
            </div>
            <div className="text-white text-xl flex items-center justify-around w-full">
                <Link href="/" legacyBehavior><a className="hover:bg-pink-700 p-3 rounded-lg">inicio</a></Link>
                <Link href="/busqueda" legacyBehavior><a className="hover:bg-pink-700 p-3 rounded-lg"> busca YA! </a></Link>
            </div>
        </nav>
    )
}

export default NavBar;