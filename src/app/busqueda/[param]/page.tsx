import NotFound from "@/components/NotFound";
import AnimeList from "@/components/client/AnimeList";
import { Anime } from "@/types/ApiType";
import { fetchAnimeData } from "@/utils/ApiAnime";


function quitarAcentos(cadena: string): string {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

async function PageAnimes({ params }) {

    const animeName = quitarAcentos(decodeURIComponent(params.param));
    const anime = await fetchAnimeData();

    if (!anime || anime.length === 0) {
        return <NotFound />;
    }

    const nombreFiltrado = anime.filter(anime => quitarAcentos(anime.title.toLowerCase()).includes(quitarAcentos(animeName.toLowerCase())));
    console.log("ESTO SE ENCONTRO WAAA", nombreFiltrado)
    return (
        <main className="p-20 min-h-screen flex flex-col gap-8 ">
            {nombreFiltrado.map((nombre: Anime) => (
                <AnimeList post={nombre} key={nombre.mal_id}></AnimeList>
            ))}
        </main>
    )
}

export default PageAnimes;