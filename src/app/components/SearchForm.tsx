"use client";

import axios from "axios";
import { useState } from "react";
import MovieGrid from "./MovieGrid";

function SearchForm() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState([]);

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

  return (
    <>
      <form
        action=""
        className="flex flex-row items-center gap-3"
        onClick={handleSearchForm}
      >
        <input
          type="text"
          placeholder="Search a movie..."
          className="p-4 px-8 rounded-3xl border-none outline-none items-start min-w-screen"
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 min-w-screen px-6 rounded-3xl cursor-pointer"
        >
          Search
        </button>
          </form>
            <MovieGrid movies={searchResults} />
    </>
  );
}
export default SearchForm;
