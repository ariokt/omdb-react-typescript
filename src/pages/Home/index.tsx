import { useEffect, useState } from "react";
import { getMovies } from "../../utils/api";
import MovieList from "../../components/MovieList";
import { HomeHeader, LoadMoreButton, StyledHome } from "./HomeStyles";
import ScrollTopButton from "../../components/ScrollTopButton";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [moviesData, setMoviesData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getDataMovies = async () => {
    setLoading(true);
    const response = await getMovies(page);
    if (response.Response === 'True') {
      setMoviesData([...moviesData, ...response.Search]);
    }
    setLoading(false);
  }

  useEffect(() => {
    getDataMovies();
  }, [page]);


  const handleChangePage = (e: any) => {
    e.preventDefault();
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <StyledHome>
      <HomeHeader>
        <h1>OMDb Movies</h1>
      </HomeHeader>
      <MovieList moviesData={moviesData} />
      { (!loading && moviesData.length < 100) && <LoadMoreButton onClick={handleChangePage}>More...</LoadMoreButton> }
      { loading && <div style={{ color: 'white', textAlign: 'center' }}>Loading...</div> }
      <ScrollTopButton />
    </StyledHome>
  )
}

export default Home;