"use client";
import axios from "axios";
import { useState } from "react";
import MovieGrid from "./MovieGrid";
import Modal from "./Modal";
import { movieT } from "../types/types";

function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<movieT[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<movieT | null>(null);

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const fetchSearchResults = async (searchValue: string) => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&query=${encodeURIComponent(searchValue)}`;

    try {
      const response = await axios.get(searchUrl);
      setSearchResults(response.data.results);
      console.log(response.data.results);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue === "") return;
    fetchSearchResults(searchValue);
    setSearchValue("");
  };

  const handleMovieClick = (movie: movieT) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <form
        action=""
        className="flex flex-row items-center gap-3 w-full justify-center p-2 max-w-md mx-auto"
        onClick={handleSearchForm}
      >
        <input
          type="text"
          placeholder="Search a movie..."
          className="p-4 px-8 rounded-3xl border-none outline-none items-start w-full"
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
        <button
          type="submit"
          className="bg-blue-600  text-white font-bold py-4 max-w-full px-6 rounded-3xl cursor-pointer  hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out "
        >
          Search
        </button>
      </form>
      <div>
        <MovieGrid movies={searchResults} handleMovieClick={handleMovieClick} />
      </div>
      <Modal movies={selectedMovie} onClose={handleCloseModal} />
    </>
  );
}

export default SearchForm;
