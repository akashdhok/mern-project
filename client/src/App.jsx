import React from 'react'
import Layout from "./Layout"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = {<Layout/>}>
    <Route index element = {<Home/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App