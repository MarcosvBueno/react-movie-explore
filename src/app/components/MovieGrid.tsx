import Image from "next/image";
import MovieCard from "./MovieCard";

function MovieGrid({ movies }: any) {
    if (!movies) return null;
    return ( 
        <>
            <div className="grid grid-cols-3 grid-flow-row  gap-10">
                {movies.map((movie: any) => (
                   <MovieCard key={movie.id} movies={movie} />
                ))}                                     
            </div>
        </>
     );
}

export default MovieGrid;