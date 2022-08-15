import React from 'react';
import SearchBox from './SearchBox';
import './Students.css';

const Students = () => {
    return(
        <div className='big_container'>
        
            <h1>Students</h1>
            <div className="search_and_add">
                <SearchBox/>
                <button>New student</button>
            </div>
            
            <div className='filter'>
                <button>Grouped students</button>
                <button>New students</button>
                <button>Archived students</button>
            </div>
        </div>
    );
}

export default Students;