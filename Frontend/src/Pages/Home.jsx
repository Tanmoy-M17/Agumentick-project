import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getData, getImage } from '../Redux/AppReducer/action';
const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
    dispatch(getImage())
  },[dispatch])
  return (
    <div>Home</div>
  )
}

export default Home