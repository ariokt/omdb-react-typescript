import React from 'react'
import { MovieListGrid } from './MovieListStyles';
import MovieCard, { MovieCardInterface } from '../MovieCard';

interface PokemonCardInterface {
  moviesData: [MovieCardInterface],
}

const MovieList: React.FC<PokemonCardInterface> = ({ moviesData }) => {
  return (
    <MovieListGrid>
      {moviesData.map((movie: any) => (
        <MovieCard key={movie.imdbID} detailMovie={movie} />
      ))}
    </MovieListGrid>
  )
}

export default MovieList;
