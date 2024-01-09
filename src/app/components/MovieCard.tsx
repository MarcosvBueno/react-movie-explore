import Image from "next/image";
import { movieT } from "../types/types";

interface MovieCardProps {
  movies: movieT;
  onClick: (movie: movieT) => void;
}

function MovieCard({ movies, onClick }: MovieCardProps) {
  return (
    <>
      <div
        key={movies.id}
        className="flex flex-col justify-center items-center gap-5 p-5 cursor-pointer hover:bg-white/10 transition-all duration-300 ease-in-out rounded-2xl"
        onClick={() => onClick(movies)}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
          alt={movies.title}
          className="rounded-2xl"
          width={300}
          height={450}
        />
        <h1 className="text-white text-2xl font-bold">
          {movies.title.length > 25
            ? movies.title.substring(0, 25) + "..."
            : movies.title}
        </h1>
      </div>
    </>
  );
}

export default MovieCard;
