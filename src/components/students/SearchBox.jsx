import React from 'react';

const SearchBox = ({searchFiled, searchChange}) => {
	return (
		<div className='pa2'>
			<input className='' type='search' placeholder='Search a student' 

			onChange={searchChange}
			/>
			
		</div>
	);
}

export default SearchBox;