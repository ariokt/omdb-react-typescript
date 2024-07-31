import { useEffect, useState } from "react";
import { getMovies } from "../../utils/api";
import MovieList from "../../components/MovieList";
import { HomeHeader } from "./HomeStyles";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [moviesData, setMoviesData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // const moviesData = useSelector((states) => states.moviesData);
  const getDataMovies = async () => {
    setLoading(true);
    const response = await getMovies(page);
    if (response.Response === 'True') {
      setMoviesData(response.Search);
    }
    setLoading(false);
  }

  useEffect(() => {
    getDataMovies();
  }, [page]);


  const handleChangePage = (offset: any) => {
    setPage(offset.selected + 1)
  }

  return (
    <div style={{padding: '20px 20px 80px 20px'}}>
      <HomeHeader>
        <h1>OMDb Movies</h1>
      </HomeHeader>
      <MovieList moviesData={moviesData} />
      { loading && <div style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}>Loading...</div> }
    </div>
  )
}

export default Home;