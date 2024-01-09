"use client";
import { movieT } from "../types/types";
import Image from "next/image";
interface ModalProps {
    movies: movieT | null;
    onClose: () => void;
}

function Modal({ movies, onClose}: ModalProps) {
  if (!movies) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center sm:p-4 p-5  ">
      <div className=" bg-white rounded-lg p-4  w-full bg-opacity-50 backdrop-blur-xl lg:max-w-xl md:max-w-lg sm:max-w-md mb-10">
        <div className="flex  justify-between items-center">
          <h2 className="sm:text-2xl text-lg font-bold mb-2 text-gray-800">{movies.title}</h2>
          <p onClick={onClose} className=" text-black font-bold  cursor-pointer text-xl ">X</p>
        </div>

        <div className="flex flex-col justify-center items-center mb-5">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
          alt={movies.title}
          className="flex justify-center items-center object-contain rounded-2xl "
            width={250}
          height={350}
        />
        </div>

            <p className="text-gray-800">{movies.overview.length > 215 ? movies.overview.substring(0,215) + "..." : movies.overview}</p>
            <div className="mt-4">
                <p className="text-gray-800"><strong>Release Date:</strong> {movies.release_date}</p>
                <p className="text-gray-800"><strong>Rating:</strong> {movies.vote_average}/10</p>
                <p className="text-gray-800"><strong>Vote Count:</strong> {movies.vote_count}</p>
            </div>
           
        </div>
  </div>
)
}

export default Modal;
