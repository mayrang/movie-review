import { SearchMovie } from "@/models/movie";
import { QueryFunction } from "@tanstack/react-query";

const INIT_SEARCH = "P9dR";

export const getSearchMovies: QueryFunction<
  SearchMovie[],
  [_1: string, _2: string, search: string]
> = async ({ queryKey }) => {
  const [_1, _2, search] = queryKey;
  let searchUrl = "";
  if (search === INIT_SEARCH) {
    searchUrl =
      "https://api.themoviedb.org/3/discover/movie?include_adult=true&language=ko-KR&region=KR&page=1&sort_by=popularity.desc";
  }
  const res = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    },
    next: {
      tags: ["search", "movie", search],
    },
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const parseRes = await res.json();
  return parseRes.results;
};
