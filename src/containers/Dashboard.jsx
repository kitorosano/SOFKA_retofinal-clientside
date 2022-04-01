import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import ProductList from '../components/ProductList'
import FacturaView from '../components/FacturaView'
import VolanteView from '../components/VolanteView'

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <Routes>
        <Route path='/' elements={<ProductList />}/>
        <Route path='/factura' elements={<FacturaView />}/>
        <Route path='/volante' elements={<VolanteView />}/>
      </Routes>
    </div>
  )
}

export default Dashboard