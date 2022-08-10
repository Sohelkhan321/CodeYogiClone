import React from 'react'
import { Link } from 'react-router-dom'
// import Lectures from './Lectures'

export default function Pagepath(props) {
  return (
    <div>
       
       <Link to={props.to} 
        
        className="text-gray-300 hover:bg-gray-700 hover:text-white flex items-center px-2 py-2 text-sm font-medium rounded-md"
       >
        {props.children}
       </Link>
    </div>
  )
}
