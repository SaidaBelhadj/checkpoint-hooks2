import React from "react";
import ReactStars from "react-rating-stars-component";

 
	
export default function MovieCard({ movie }) {
    const ratingChanged = () => {
        console.log("newRating",movie.IMDBRating);
      };
       
return (
<div className='movie-container'>
<div className= 'movie'> 
<div className= 'movie-img'>
<img src ={movie.Poster} alt = 'movie' style= {{width:300 , height:450}}></img>
</div> 
   <div className= 'movie-info'><span> {movie.Title}</span></div>
   <div className= 'movie-rate'>  <span>   
        <ReactStars
                        count={5}
                        size={20}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        
                        onChange={ratingChanged}
                        activeColor="#ffd700"
                        value={movie.IMDBRating}
                        edit={false}
                    /> </span>
   </div>
   <div className='movie-over'><h3> <span>Description :</span></h3><p> {movie.Description}</p></div>
   </div>
   </div>
   	  );
}
         