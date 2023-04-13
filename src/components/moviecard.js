import React from 'react';

const movieCard = ({data}) => {
    console.log(data)
    return (
        <div>
            <h3>Title: {data.Title}</h3>
        </div>
    )
};

export default movieCard;