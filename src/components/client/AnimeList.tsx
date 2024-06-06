'use client';

import { Anime } from "@/types/ApiType";
import Link from "next/link";


export default function AnimeList({ post }: { post: Anime }) {

    return (
        <div className="p-4 text-white bg-pink-500 rounded-xl shadow-lg">
            <div>
                <h1 className="text-2xl font-bold">
                    {post.mal_id}. {post.title} / {post.title_english}
                </h1>
                <p className="text-xl mt-2">{post.type}</p>
                <p className="mt-1">Episodes: {post.episodes}</p>
                {post.genres.length > 0 && (
                    <p className="text-xl mt-1" key={post.genres[0].mail_id}>
                        Genre: {post.genres[0].name}
                    </p>
                )}
            </div>

            <Link href={`/busqueda/perfil/${post.mal_id}`} legacyBehavior>
                <a className="mt-4 inline-block bg-green-500 p-3 rounded-xl text-center">
                    Entrar
                </a>
            </Link>
        </div>
    )
}