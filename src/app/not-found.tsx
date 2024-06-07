import AnimationSection from "@/components/Animation";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col  items-center justify-center gap-8">
            <div className="text-4xl bg-white text-black  text-center z-10 "> PAGE NO ENCONTRADA VUELVA A LA PAGINA PRINCIPAL </div>
            <AnimationSection/>
        </div>
    )
}