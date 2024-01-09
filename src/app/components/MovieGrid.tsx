
import MovieCard from "./MovieCard";
import { movieT } from "../types/types";

interface MovieGridProps {
  movies: movieT[];
  handleMovieClick: (movie: movieT) => void;
}

function MovieGrid({ movies, handleMovieClick }: MovieGridProps) {
  if (!movies) return null;
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-flow-row gap-10 md:grid-cols-2 ">
        {movies.map((movie: movieT) => (
          <MovieCard
            key={movie.id}
            movies={movie}
            onClick={() => handleMovieClick(movie)}
          />
        ))}
      </div>
    </>
  );
}

export default MovieGrid;