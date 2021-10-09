import React from 'react'



const SearchBox = (props) => {
  const handleOnChange = (e)=> {
    props.setSearchValue(e.target.value)
   };
   return (
        <div style ={{paddingRight:50}}>
            <input className = "search"
             type="search"
             onChange= {handleOnChange}
             placeholder= "Type to search...">
              </input>
            
        </div>
        
    );
    
};
export default SearchBox;
