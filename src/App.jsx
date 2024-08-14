// import Header from "./components/header"
import { useEffect, useState } from "react";
import SearchableInput from "./components/searchableInput";
import axios from "axios";
import PropTypes from "prop-types";

function App() {
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
    <div className="py-10">
      <SearchableInput handleChange={handleChange} />
      {/* {isOpen &&}  */}
      <ul>
        {searchResults.map((data, idx) => (
          <li key={idx}>{data.word}</li>
        ))}
      </ul>
      <div className="flex flex-col justify-start  px-5">
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

export default App;

App.proptype = {
  setSearchValue: PropTypes.string,
};
