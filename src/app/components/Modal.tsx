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
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center p-4  ">
        <div className=" bg-white rounded-lg p-4 max-w-xl w-full bg-opacity-50 backdrop-blur-xl ">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{movies.title}</h2>
        <div className="flex flex-col justify-center items-center mb-5">
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
          alt={movies.title}
          className="flex justify-center items-center object-contain rounded-2xl"
            width={250}
          height={350}
        />
        </div>

            <p className="text-gray-800">{movies.overview}</p>
            <div className="mt-4">
                <p className="text-gray-800"><strong>Release Date:</strong> {movies.release_date}</p>
                <p className="text-gray-800"><strong>Rating:</strong> {movies.vote_average}/10</p>
                <p className="text-gray-800"><strong>Vote Count:</strong> {movies.vote_count}</p>
            </div>
            <button onClick={onClose} className="bg-blue-600  text-white font-bold py-3 min-w-screen px-5 rounded-3xl mt-4 cursor-pointer  hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out ">Close</button>
        </div>
  </div>
)
}

export default Modal;
