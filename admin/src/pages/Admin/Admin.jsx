import React from 'react'
import Sidebar from '../../Componets/Sidebar'
import { Routes, Route } from 'react-router-dom'

import Orders from './Orders'
import Products from '../Products'
import Addproduct from '../Addproduct'

const Admin = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Routes>
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<Addproduct/>}/> 
      </Routes>
    </div>
  )
}

export default Admin
