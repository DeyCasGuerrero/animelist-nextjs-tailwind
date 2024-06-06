// Interface for Image URLs
export interface ImageURLs {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

// Interface for Trailer
export interface Trailer {
    youtube_id: string;
    url: string;
    embed_url: string;
}

// Interface for Title
export interface Title {
    type: string;
    title: string;
}

// Interface for Aired
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

// Interface for Producer, Licensor, Studio, Genre, etc.
export interface Entity {
    mal_id: number;
    type: string;
    name: string;
    url: string;
}

// Main Anime Interface
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
    producers: Entity[];
    licensors: Entity[];
    studios: [
        {
            mail_id:string;
            type: string;
            name: string;
            url: string;
        }
    ];
    genres: [
        {
            mail_id:string;
            type:string;
            name:string;

        }
    ];
    explicit_genres: Entity[];
    themes: Entity[];
    demographics: Entity[];
}
