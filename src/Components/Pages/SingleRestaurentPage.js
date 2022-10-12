import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

export default function SingleRestaurentPage() {
    const { restaurentId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${restaurentId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data.meals[0]));


    }, [restaurentId, data])


    return (
        <div>
            <div className=' flex justify-center my-10 '>
                <div className='w-3/6 p-2 rounded border-2 border-cyan-400 text-justify'>
                    <img className='w-full h-80 ' src={data.strMealThumb} alt="" />
                    <h2 className='text-cyan-500 font-bold py-2'>{data.strMeal}</h2>
                    <p><b>Category:</b> {data.strCategory}</p>
                    <p><b>Area:</b> {data.strArea}</p>
                    <p><b>Tags:</b> {data.strTags}</p>
                    <p><b>Ingredients:</b>  <small>{data.strIngredient1}, {data.strIngredient2}, {data.strIngredient3}, {data.strIngredient4}, {data.strIngredient5}, {data.strIngredient6}, {data.strIngredient7}, {data.strIngredient8}, {data.strIngredient9}, {data.strIngredient10}, {data.strIngredient11}, {data.strIngredient12}, {data.strIngredient13}, {data.strIngredient14}, {data.strIngredient15}, {data.strIngredient16}, {data.strIngredient17}, {data.strIngredient18}, {data.strIngredient19}, {data.strIngredient20}</small></p>


                    <p><b>Measurements:</b> {data.strMeasure1}, {data.strMeasure2}, {data.strMeasure3}, {data.strMeasure4}, {data.strMeasure5}, {data.strMeasure6}, {data.strMeasure7}, {data.strMeasure8}, {data.strMeasure9}, {data.strMeasure10}, {data.strMeasure11}, {data.strMeasure12}, {data.strMeasure13}, {data.strMeasure14}, {data.strMeasure15}, {data.strMeasure16}, {data.strMeasure17}, {data.strMeasure18}, {data.strMeasure19}, {data.strMeasure20}</p>
                    <p><b>Instructions:</b> {data.strInstructions}</p>
                </div>
            </div>

        </div>
    )
}
