
export async function useFetchMovieDetails(id){
    const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);
    const res = await req.json();
    return res.results
}