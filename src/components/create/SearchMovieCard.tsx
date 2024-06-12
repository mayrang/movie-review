"use client";

import { SearchMovie } from "@/models/movie";
import Flex from "../shared/Flex";
import ListRow from "../shared/ListRow";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/utils";

export default function SearchMovieCard({ movie }: { movie: SearchMovie }) {
  return (
    <ListRow
      withArrow
      left={
        <Image
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={`${movie.title}의 포스터입니다.`}
          width={300}
          height={500}
        />
      }
      content={<>{movie.title}</>}
    ></ListRow>
  );
}
