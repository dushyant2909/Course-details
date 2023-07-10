import React from 'react';
import './FilterData.css';

function FilterData(props) {
    function buttonClickHandler(title) {
        props.filterButtonHandler(title);
    }

    const filterData = props.filterData;
    return (
        <div className='filterOptions-boundary'>
            {filterData.map((data) => (
                <button onClick={() => buttonClickHandler(data.title)} className='btn btn-dark filter-button' key={data.id}>{data.title}</button>
            ))}
        </div>
    );
}

export default FilterData;
