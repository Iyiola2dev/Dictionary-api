import { CiSearch } from "react-icons/ci";

const SearchableInput = ({handleChange}) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Dictionary</h1>
      <div className="relative ">
        <CiSearch className="absolute font-bold text-lg top-[0.5rem] left-1" />
        <input onChange={handleChange}
          className="pl-6 py-1 rounded-sm w-full  bg-slate-300"
          type="text"
          name=""
          id=""
          placeholder="search here"
        />
      </div>
      {/* <button className="mt-2 flex justify-start items-start">
        <a
          href="#_"
          className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-slate-400 inline-block"
        >
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-slate-500 group-hover:h-full opacity-90"></span>
          <span className="relative group-hover:text-white">Search</span>
        </a>
      </button> */}
    </div>
  );
};
export default SearchableInput;
