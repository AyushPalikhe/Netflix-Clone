
const API_KEY = "c282cfdd0abc92e924fdf7cd24f20279"

export default {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchUpcoming: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies: 'https://api.themoviedb.org/3/list/35',
    fetchHorrorMovies: 'https://api.themoviedb.org/3/list/27',
}
