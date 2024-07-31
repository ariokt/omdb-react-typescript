import React from 'react'
import { MovieCardContainer } from './MovieCardStyles'

export interface MovieCardInterface {
  detailMovie: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  }
}

const MovieCard: React.FC<MovieCardInterface> = ({ detailMovie }) => {
  return (
    <MovieCardContainer>
      <img src={detailMovie.Poster} alt={detailMovie.Title} />
      <div>
        <h2>{detailMovie.Title} - {detailMovie.Year}</h2>
      </div>
    </MovieCardContainer>
  )
}

export default MovieCard