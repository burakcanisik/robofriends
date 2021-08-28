import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa3'>
            <input 
                className = 'pa3 ba b--yel bg-lightest-blue tc'
                type = 'search'
                placeholder = 'search robots'
                onChange = {searchChange}
            />
        </div> 
    );
}

export default SearchBox;