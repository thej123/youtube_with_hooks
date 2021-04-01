import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')
    
    // const onInputChange = (e) => {
    //     setTerm(e.target.value)
    // }
    // changed name so that it wont crash with the prop coming from parent
    const onSubmit = e => {
        e.preventDefault()
        // make to call the callback from parent component
        onFormSubmit(term)
    }

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Label Search</label>
                    <input
                     type="text"
                     value={term}
                     onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

// class SearchBar extends React.Component {
//     state = { term: '' }

//     onInputChange = (e) => {
//         this.setState({ term: e.target.value })
//     }

//     onFormSubmit = e => {
//         e.preventDefault()
//         // make to call the callback from parent component
//         this.props.onFormSubmit(this.state.term)
//     }

//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label htmlFor="">Label Search</label>
//                         <input
//                          type="text"
//                          value={this.state.term}
//                          onChange={this.onInputChange}
//                         />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default SearchBar