import React, { useState, useEffect } from 'react'
import SingleRestaurent from '../SingleRestaurent/SingleRestaurent';

export default function Restaurent() {
    const [searchText, setSearchText] = useState('')
    const [restaurents, setRestaurents] = useState([])

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchText(searchText)
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setRestaurents(data.meals))
    }, [searchText])

    return (
        <div>
            <div className='flex justify-center my-3'>
                <input className='bg-cyan-400 text-white border-none p-1' type="text" placeholder='Search Here' onChange={handleSearch} />
            </div>
            <div className='container flex flex-wrap gap-1'>
                {
                    restaurents.map(restaurent => <SingleRestaurent
                        key={restaurent.idMeal}
                        restaurent={restaurent}
                    ></SingleRestaurent>)
                }
            </div>
        </div>
    )
}
