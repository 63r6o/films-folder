import { DiscoverQueryResult, MovieDetails } from "./types";

const baseUrl = "https://api.themoviedb.org/3";

const headers = {
    Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    accept: "application/json",
};

export async function fetchPopularMovies() {
    try {
        const response = await fetch(
            `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
            { headers, method: "Get", cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }

        // TODO check this properly
        const data: DiscoverQueryResult = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchNowPlaying() {
    try {
        const response = await fetch(
            `${baseUrl}/movie/now_playing?language=en-US&page=1`,
            { headers, method: "Get", cache: "no-store" }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch now playing movies");
        }

        // TODO check this properly
        const data: DiscoverQueryResult = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchFilteredMovies(query: string, currentPage: number) {
    try {
        const response = await fetch(
            `${baseUrl}/search/movie?include_adult=false&language=en-US&query=${query}&page=${currentPage}`,
            {
                headers,
                method: "Get",
                cache: "no-store",
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch search query");
        }

        // TODO check this properly
        const data: DiscoverQueryResult = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function fetchMovieDetails(id: string) {
    try {
        const response = await fetch(`${baseUrl}/movie/${id}?language=en-US`, {
            headers,
            method: "Get",
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error("Failed to fetch search query");
        }

        // TODO check this properly
        const data: MovieDetails = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}
