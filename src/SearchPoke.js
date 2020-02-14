import React, { Component } from "react";

export default class SearchPoke extends Component {
//add an event handler function here called handleSubmit to the form below:
handleSubmit = e => {
    const form = document.querySelector('form');
    e.preventDefault();
    const formData = new FormData(form);
}

//Get input from field
//update the URL based on the search field
//

    render() {

        return( 
        <form className='searchForm' onSubmit={this.handleSubmit}>
            <label>Search for Pokemon: </label>
                <input />
            <button>Get Pokemon!</button>    
           
            
        </form>


        
        )}
}