import React from 'react'

// import Header from "./components/header"
import { useEffect, useState } from "react";
import SearchableInput from "../components/SearchableInput";
import axios from "axios";
import PropTypes from "prop-types";
import SearchList from "../components/SearchList";


function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setLoading(true);
    setIsOpen(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
      .then((res) => {
        console.log(res.data);
        setSearchResults(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [searchValue]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setIsOpen(false);
      setSearchResults([]);
    }
  }, [searchResults, searchValue]);
  return (
    <div className="py-10 px-5">
      <SearchableInput handleChange={handleChange} />
      {isOpen && (
        <ul className="bg-gray-200 flex flex-col px-2 py-2 rounded-b-lg gap-2 ">
          {searchResults.map((data, idx) => (
        <SearchList key={idx} data= {data} id={idx}/>
          ))}
        </ul>
      )}
      <div className="flex flex-col justify-start  mt-5">
        <h4 className="text-xl font-semibold">Recents</h4>
        <ul>
          <li>Dog</li>
          <li>Goat</li>
          <li>Segun</li>
          <li>Laptop</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

Home.proptype = {
  setSearchValue: PropTypes.string,
};
