import React from 'react'
import { connect } from "react-redux";
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of iceCreams - {props.numOfIceCreams}</h2>
        <button type='button' onClick={props.buyIceCream}>Buy iceCream</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return{
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)