import React from 'react'
import { countDecrement, countIncrement, countReset } from '../redux'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div>
        <h1>Count - {props.count}</h1>
        <button onClick={props.countIncrement}>increment</button>
        <button onClick={props.countReset}>Reset</button>
        <button onClick={props.countDecrement}>decrement</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        count:state.count
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        countIncrement: () => dispatch(countIncrement()),
        countDecrement: () => dispatch(countDecrement()),
        countReset: () => dispatch(countReset())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)