import React, { Component } from 'react'

//React.createElement is called below

// const SearchBar = () => <input /> 

// class SearchBar extends React.Component {
//     render() {
//         return <input />
//     }
// }

// after cleanup (otherwise just import react from react)

class SearchBar extends Component {
    constructor(props) { //init state
        super(props) // takes from Compoenent
        this.state = {term: ''} // we pass properties we want to record in state - here we pass 'search term'
        // only in constructor we change it like this by this.state = sth. Otherwise use setState
    }

    render() {
        // return <input onChange={this.onInputChange} /> //event and event handler w/o arrow func
        return ( //value=sth is not a must here but its really useful if we want to set initial value in the input box or if we want to access it somewhere else
            <div className='search-bar'>
                <input 
                    value={this.state.term} 
                    onChange={ event => this.onInputChange(event.target.value) } />
                Value of input: {this.state.term}
            </div>
        ) // we can reference state with this.state but we shouldnt modify it in that way apart from constructor
    } // input is controlled element as input updates state


    onInputChange(term) {
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar