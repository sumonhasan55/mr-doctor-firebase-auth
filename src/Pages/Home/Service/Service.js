import React from 'react';
import './Service.css';



const Service = ({service}) => {
    const {name, img, id, cost, description} = service;
    return (
        <div className='service'>
        
        <img src={img} alt=''></img>
            <h2>{name}</h2>
            <p>Price:{cost}</p>
            <p>Description:{description}</p>
            <button className='bg-primary text-white rounded'>Book:{name}</button>
        </div>
    );
};

export default Service;