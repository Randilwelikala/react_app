import React from "react";

const SearchBar = ({onSearch,searchText})=> {

    const searchHandle = (event) =>{
        // console.log(event.target.value);
        onSearch(event);
    };
    return(
        <div className="form-container">
            <form className = "form-wrapper">
                <input 
                type="text" 
                id="search" 
                value ={searchText}
                placeholder="search..." 
                onChange={searchHandle}/>
            </form>
        </div>
    );
};
export default SearchBar;