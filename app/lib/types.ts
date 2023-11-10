export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string; // this should be an enum
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface DiscoverQueryResult {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Company {
    id: string;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Country {
    iso_3166_1: string;
    name: string;
}

export interface Language {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    // belongs_to_collection: string[] | null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];
    production_countries: Country[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Language[];
    status: string; // this should be an enum
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
