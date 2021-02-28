import React, { useEffect, useState } from 'react';
import "../styles/SearchBar.css";
import useInput from "../hooks/useInput";
import axios from "axios";
import { debounce } from "lodash"
import MoviesList from './MoviesList';

export default function SearchBar() {
  const [name, setName] = useInput("");
  const [movies, setMovies] = useState("");
  useEffect(() => {
    async function fetchData() {
      let res;
      if (name) {
        res = await axios.get(`http://www.omdbapi.com/?apikey=8f602fe2&s=${name}`)
        console.log(res.data.Search)
        setMovies(res.data.Search);
      }
    }
    fetchData();
    console.log(movies);
  },
    [name])

  //Debouncing the function using lodash debounce
  const fetchResults = debounce((name) => {
    setName(name);
  }, 1000);

  return (
    <div>
      {/* we pass e.target.value instead of just e to resolve synthetic event issue in react in onChange */}
      <input className="textbox" onChange={(e) => fetchResults(e.target.value)} type="text" placeholder="Enter Movie Name" />
      <div className="movies-list">
        {movies.length >= 1 && <MoviesList movies={movies} />}
      </div>
    </div>
  )
}