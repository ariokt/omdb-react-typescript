const BASE_URL = 'https://www.omdbapi.com/?apikey=88c7dfa4';

export async function getMovies(page:number = 1) {
  try {
    const response = await fetch(`${BASE_URL}&page=${page}&s=all`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    window.alert('Koneksi bermasalah, mohon ulangi!');
  }
}