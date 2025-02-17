import React from "react";

const SearchBar = ()=> {

    const searchHandle = (event) =>{
        console.log(event.target.value);
    };
    return(
        <div className="form-container">
            <form className = "form-wrapper">
                <input 
                type="text" 
                id="search" 
                placeholder="search" 
                onChange={searchHandle}/>
            </form>
        </div>
    );
};
export default SearchBar;