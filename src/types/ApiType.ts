// Interface para las imagenes waa
export interface ImageURLs {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

// Interface para la url wa 
export interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
}

export interface Title {
    type: string;
    title: string;
}

// Interface para la decha de incio y fin del anime xd
export interface Aired {
    from: string;
    to: string;
    prop: {
        from: {
            day: number;
            month: number;
            year: number;
        };
        to: {
            day: number;
            month: number;
            year: number;
        };
        string: string;
    };
}

// 

// la interface principal waaa
export interface Anime {
    mal_id: number;
    url: string;
    images: {
        jpg: ImageURLs;
        webp: ImageURLs;
    };
    trailer: Trailer;
    approved: boolean;
    titles: Title[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: string;
    source: string;
    episodes: number;
    status: string;
    airing: boolean;
    aired: Aired;
    duration: string;
    rating: string;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season: string;
    year: number;
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    studios: [
        {
            mal_id:string;
            type: string;
            name: string;
            url: string;
        }
    ];
    genres: [
        {
            mal_id:string;
            type:string;
            name:string;

        }
    ];
}
