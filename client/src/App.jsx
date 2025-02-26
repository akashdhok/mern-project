import React from 'react'
import Layout from "./Layout"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dash from './Dash'
import DoctorDash from './pages/DoctorDash'
import SearchDoctor from './pages/Search'
import BookNow from './pages/BookNow'
const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = {<Layout/>}>
    <Route index element = {<Home/>}/>
    <Route path = "home"  element = {<Home/>}/>
    <Route path='login' element = {<Login/>}/>
    <Route path="searchdoctor" element={<SearchDoctor/>} />
    <Route path='booknow/:id' element = {<BookNow/>}/>
    </Route>
  
   </Routes>
   <Routes>
   <Route path='dashboard' element = {<Dash/>}>
    <Route path='doctordash' element = {<DoctorDash/>}/>
    </Route>
   </Routes>

   </>
  )
}

export default App