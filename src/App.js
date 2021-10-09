import React ,{useState} from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import SearchBox from './Component/SearchBox';
import MovieData from './Component/MovieData';
import StarRating from './Component/StarRating';
import AddMovie from './Component/AddMovie';

const App = () => {
let [searchValue, setSearchValue] = useState('');
let [searchValueRate, setSearchValueRate] = useState(0);
let [movies, setMovies] = useState(MovieData);


const getVisibileData = ({movies}) => {
{ 
  return movies.filter(
    movie =>
    ( (searchValueRate === 0 )? movie.Title.toLowerCase().includes(searchValue.toLowerCase().trim()) :
    (searchValueRate === movie.IMDBRating) && movie.Title.toLowerCase().includes(searchValue.toLowerCase().trim())
     ))
  }
}

return (
   <> 
    
     <header>
     <SearchBox searchValue ={searchValue}  setSearchValue={setSearchValue} />
     <StarRating searchValueRate ={searchValueRate}  setSearchValueRate={setSearchValueRate}/>
     </header >
     <div className= 'col' >
            <h1>'Movie Card'</h1>  
        </div>
      <div className="movie-container">
       <MovieList
	            movies={getVisibileData({movies})} setMovies={setMovies} />
       </div>
       
     <AddMovie movies= {movies} setMovies={setMovies}/>
    </>
  );
};
export default App;
