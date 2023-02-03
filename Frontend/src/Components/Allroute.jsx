import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Signin from './Signin'
import Home from '../Pages/Home'

const Allroute = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
    </div>
  )
}

export default Allroute