import React from 'react';
import './FilterData.css';

function FilterData(props) {
    const filterData = props.filterData;
    return (
        <div className='filterOptions-boundary'>
            {filterData.map((data) => (
                <button className='btn btn-dark filter-button' key={data.id}>{data.title}</button>
            ))}
        </div>
    );
}

export default FilterData;
