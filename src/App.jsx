import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './component/user/Index.jsx'
import Create from './component/user/Create.jsx'
import Details from './component/Details.jsx'
import Edit from './component/Edit.jsx'


export default function App() {
  return (
   
    <Routes>
      <Route path='/' element={<Create/>}/>
      <Route path='/user/create' element={<Create/>}/>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/user/:id' element={<Details/>}/>
      <Route path='/user/edit/:id' element={<Edit/>}/>

      <Route path='*' element={<h2>user not found</h2>}/>



    </Routes>
  )
}
