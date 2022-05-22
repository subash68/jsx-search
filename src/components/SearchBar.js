import React from 'react';

const SearchConfig = {
    static: {
        text: 'Search'
    }
};

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>{SearchConfig.static.text}</label>
                        <input type='text' value={ this.state.value } placeholder='search' onChange={ (e) => this.setState({term : e.target.value })} />
                    </div>
                  
                </form>
            </div>
            
        );
    }
}

export default SearchBar;