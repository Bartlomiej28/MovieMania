
export async function useFetchMovieDetails(id){
    const API_KEY = 'a44392fa722e1b828c635da1eb5108eb'
    const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const res = await req.json();
    return res.results
}