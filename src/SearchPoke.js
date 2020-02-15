import React, { Component } from "react";

export default class SearchPoke extends Component {
    componentDidMount() {
        this.updateQuery();

    window.addEventListener('hashchange', () => {
        this.updateQuery();
    });
    }

    state = { 
        searchInput: "",
};

    updateQuery() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        // const name = searchParams.get('pokemon');

        this.setState({
            searchInput: searchParams.get('pokemon') || "",
        });
    }


//add an event handler function here called handleSubmit to the form below:
    handleSubmit = e => {
        const form = document.querySelector('form');
        e.preventDefault();
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        searchParams.set('pokemon', formData.get('search'));
        searchParams.set('page', 1);

        window.location.hash = searchParams.toString();
    }


    render() {

        return( 
        <form className='searchForm' onSubmit={this.handleSubmit}>
            <label>Search for Pokemon: 
                <input 
                    name='search'
                    onChange={e => this.setState({ searchInput: e.target.value })}
                    value={this.state.searchInput}    
                />
            </label>
            <button>Get Pokemon!</button>    
           
            
        </form>
        
        )}
}