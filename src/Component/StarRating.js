
import {Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const StarRating = ({ searchValueRate, setSearchValueRate}) => {

  const ratingChanged = (e) => {setSearchValueRate(e)}
   
  console.log("ratingChanged", searchValueRate)  ; 
      const refreshPage = ()=>{
        window.location.reload();
     }
  return (
<div>
    <div className='rating-by-stars' >
    <span><i>Search by rating</i></span>

      <ReactStars
 
               count={5}
              size={20}
              isHalf={false}
              onChange={ratingChanged}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
      
              value={searchValueRate}
  

     /> 
</div>
 <Button  variant="outline-secondary" onClick={refreshPage}>Reset</Button>
 </div>


  );
  
};
export default StarRating;
