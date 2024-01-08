import Search from "./components/SearchForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h1 className="text-6xl text-white font-bold mb-5 mt-10" >Movie Explorer</h1>
      <Search />
    </div>
  );
}
