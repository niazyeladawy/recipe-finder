import React, { useEffect } from 'react'
import classes from './singleRecipe.module.css'
import imgnotfound from '../assests/images/notfound.png'
import { AiOutlineHeart } from 'react-icons/ai';

const SingleRecipe = ({ recipe }) => {

    const { label, totalTime, calories, totalWeight, uri } = recipe.recipe;



    return (
        <div className={classes['single-recipe']}>
            <img src={recipe?.recipe?.image ? recipe.recipe.image : imgnotfound} className='mb-2' alt="" />
            <h4>{label}</h4>
            <h5>Cocking Time : {totalTime} minutes</h5>
            <p>this recipe contain {calories.toFixed()} calories and wieghts {totalWeight.toFixed()}lb</p>
            <AiOutlineHeart  />
        </div>
    )
}

export default SingleRecipe