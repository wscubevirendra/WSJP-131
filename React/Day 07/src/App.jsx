import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Input from './Input'

export default function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    try {
      let API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"

      if(search !==""){
        API= `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search} `
      }



      const response = await fetch(API);
      const data = await response.json();
      setMovies(data.results)

    } catch (error) {
      setMovies([])
    }

  }

  useEffect(
    () => {
      getMovies()
    },
    [search]
  )

  return (
    <div className="container py-5">
      <Input setSearch={setSearch} search={search} />
      <div className="row g-4">
        {
          movies.map((data, index) => {
            return <MovieCard key={index} data={data} />

          })
        }

      </div>
    </div>

  )
}
