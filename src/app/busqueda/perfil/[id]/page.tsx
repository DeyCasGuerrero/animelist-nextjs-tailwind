
import { Anime } from "@/types/ApiType";
import { fetchAnimeData } from "@/utils/ApiAnime";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFire, faStar, faHeart, faTrophy, faPalette, faCalendar } from '@fortawesome/free-solid-svg-icons';
import YoutubeIcon from "@/components/icons/YoutubeIcon";

async function AnimePageById({ params }) {
    const id: number = params.id;

    const anime: Anime = await fetchAnimeData(id);

    if (anime == undefined) {
        return;
    }

    function formatDate(dateString: string): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <main className="min-h-screen bg-slate-900 text-white p-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                {anime && anime.images && anime.images.webp && anime.images.webp.image_url ? (
                    <div className="w-full md:w-1/3 h-full">
                        <img className="w-full h-full object-cover rounded-lg shadow-lg" src={anime.images.webp.image_url} alt={anime.title} />
                    </div>
                ) : (
                    <p className="text-red-500">WAAA</p>
                )}
                <div key={anime.mal_id} className="bg-slate-800 p-4 rounded-lg shadow-lg w-full md:w-2/3 tracking-widest font-bold">
                    <h4 className="text-xl font-semibold">Tipo: {anime.type}</h4>
                    <hr className="border-slate-700 my-2" />
                    <h4 className="text-lg">Estado: {anime.status}</h4>
                    <hr className="border-slate-700 my-2" />

                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faStar} height={40} width={40} /> Puntuación: {anime.score} por {anime.scored_by} personas
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faFire} height={40} width={40} /> Popularidad: {anime.popularity}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faHeart} height={40} width={40} /> Miembros: {anime.members}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faHeart} height={40} width={40} /> Favoritos: {anime.favorites}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faTrophy} height={40} width={40} />Rango: {anime.rank}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faTrophy} height={40} width={40} /> Rating: {anime.rating}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faClock} height={40} width={40} /> Temporada: {anime.season}
                    </h5>
                    <h5 className="text-base flex items-center gap-4">
                        <FontAwesomeIcon icon={faCalendar} height={40} width={40} /> Aired: {formatDate(anime.aired.from)} to {formatDate(anime.aired.to)}
                    </h5>
                    <div className="flex items-center gap-4">
                        <Link className="text-blue-500 underline text-3xl" href={anime.trailer.url} target="_blank" rel="noopener noreferrer">
                            Ver Trailer
                        </Link>
                        <YoutubeIcon color="#FF0000" size={50}></YoutubeIcon>

                    </div>
                    <div className="mt-4">
                        <h5 className="text-lg font-medium flex items-center gap-4">
                            <FontAwesomeIcon icon={faPalette} height={40} width={40} /> Studio: {anime.studios[0].name}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="mt-4 bg-slate-800 p-8 rounded-lg">
                <h1 className="text-2xl font-bold text-center">{anime.title} / {anime.title_english} / {anime.title_japanese}</h1>
                <p className="mt-2 text-justify">{anime.synopsis}</p>
            </div>

            <div>

            </div>
        </main>

    )
}

export default AnimePageById;