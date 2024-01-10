"use client";
import { useState, useEffect, SetStateAction } from "react";
import MovieGrid from "../components/MovieGrid";
import Modal from "../components/Modal";
import { movieT } from "../types/types";
import axios from "axios";

function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<movieT | null >(null);

  useEffect(() => {
    const fetchData = async () => {
      const searchUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
      try {
        const response = await axios.get(searchUrl);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  
  function handleCloseModal() {
    setSelectedMovie(null);
  }

  function handleMovieClick(movies: movieT) {
    setSelectedMovie(movies);
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-6xl font-bold m-3">Now Playing</h1>
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
        {selectedMovie && (
          <Modal movies={selectedMovie} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  );
}

export default NowPlaying;
