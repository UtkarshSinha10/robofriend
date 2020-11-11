import React from 'react';

const SearchBox=({onSearchChange})=>{
    return (
        <div className='pd2'>
            <input 
            className='pd3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Robots'
            onChange={onSearchChange}
            />
        </div>  
    );
}
export default SearchBox;