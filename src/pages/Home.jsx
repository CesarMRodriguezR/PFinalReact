import ProductCard from "../components/ProductCard";
import SmallCard from "../components/SmallCard";
import '../css/Home.css'


function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const loadPopularMovies = async () => {
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed");
      }
      finally {
        setLoading(false);
      }
    }
    loadPopularMovies();
  },[])

  /*const movies=[
    {id: 1, title: "John Wick", release_date:"2020"},
     {id: 2, title: "Terminator", release_date:"1989"},
      {id: 3, title: "The Matrix", release_date:"1998"},
  ]*/
  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return;
    if(loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    }
    catch (err) {
      console.log(err);
      setError("Fallo llamada search.")
    }
    finally {
      setLoading(false);
    }
  };

  const filteredMovies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if(!q) return movies;
    return movies.filter(m => m.title.toLowerCase().includes(q));
  }, [searchQuery, movies]);

  return (
    
      <>
      <div className="home">
      <form onSubmit={handleSearch} className="search-form">
          <input type="search" placeholder="Buscar pelicula..." className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">Search</button>
      </form>

        <div className="movies-grid">
            {filteredMovies.map((movie) =>(
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
      </>
  );
}

export default Home