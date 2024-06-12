"use client";

import { getSearchMovies } from "@/lib/search/getSearchMovies";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import SearchMovieCard from "./SearchMovieCard";

const INIT_SEARCH = "P9dR";

export default function MovieList() {
  const params = useSearchParams();
  const search = params.get("search") ?? INIT_SEARCH;
  const { data: movies, isLoading } = useQuery({
    queryKey: ["search", "movie", search],
    queryFn: getSearchMovies,
  });
  console.log("MOVIES", movies);
  return (
    <>
      {movies?.map((movie) => (
        <SearchMovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
}
