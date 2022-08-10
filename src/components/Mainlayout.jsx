import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Mainlayout() {
  return (
    <div>
  <div className="flex items-strech h-screen ">
      < Sidebar />
      <Outlet />
    </div>
      
    </div>
  )
}
