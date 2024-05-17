import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
       <h2>Number of cakes - {numOfCakes}</h2>
        <button type='button' onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer