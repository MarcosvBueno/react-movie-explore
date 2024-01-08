function SearchForm() {
    return (
      <> 
        <form
          action=""
          className="flex flex-row items-center gap-3"
        >
          <input type="text" placeholder="Search a movie..." className="p-4 px-8 rounded-3xl border-none outline-none items-start" />
          <input
            type="submit"
            value="Search"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-3xl cursor-pointer"
          />
        </form>
      </>
    );
  }
export default SearchForm;
