import React from 'react'
import { Link } from 'react-router-dom';

export default function SingleRestaurent(props) {

    const { strMeal, strMealThumb, strInstructions, idMeal } = props.restaurent;


    return (
        <div className='card p-1 border-cyan-400' style={{ width: "33%" }}>
            <img className='w-20 h-20' src={strMealThumb} alt="" />
            <h3 className='text-cyan-400'>{strMeal}</h3>
            <p>{strInstructions.slice(0, 100)}</p>
            <Link to={`/restaurent/${idMeal}`} > <button>See Details</button> </Link>
        </div>
    )
}
