import AnimeList from "@/components/client/AnimeList";
import InputComponent from "@/components/common/Input";
import { fetchAnimeData } from "@/utils/ApiAnime";
import { Anime } from "@/types/ApiType";

async function SearchingPage() {


    const posts = await fetchAnimeData();
    console.log("WAAAA",posts)
    if(!posts){
        return;
    }
    return (

        <section className="p-20 min-h-screen bg-slate-100 max-sm:p-8 overflow-hidden">
            <div>
                <h1 className="text-6xl text-center font-bold max-sm:text-4xl">BUSCA TUS ANIMES EN NUESTRO NAVEGADOR</h1>
                <InputComponent/>
            </div>
            <div className="w-full flex flex-col gap-4 mt-8 ">
                {posts.map((post: Anime) => (
                    <AnimeList post={post} key={post.mal_id}></AnimeList>
                ))}
            </div>
        </section>

    )

}

export default SearchingPage;