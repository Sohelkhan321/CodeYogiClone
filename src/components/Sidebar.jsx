import React from 'react'

import Pagepath from './Pagepath';
import {MdOutlineQuiz ,MdBorderColor,MdAssignment} from 'react-icons/Md';
import {BsClockHistory } from 'react-icons/Bs';
import {CgProfile } from 'react-icons/Cg';
import {BiLogOut } from 'react-icons/Bi';

export default function Sidebar() {
  return (
    <div className='bg-gray-500 h-full'>
      <div>
      <h1 className='font-bold text-2xl'>CODEYOGI</h1>
      </div>

     
      
     
      <Pagepath to ="/Quiz"><span className='m-3'> <MdOutlineQuiz /></span> Quiz page</Pagepath>
      <Pagepath to ="/lectures"> <span className='m-3'> <MdBorderColor /></span> lectures</Pagepath>
      <Pagepath to ="/Assignment"> <span className='m-3'><MdAssignment /></span> Assignemts</Pagepath>
      <Pagepath to ="/Daily"> <span className='m-3'><BsClockHistory /></span> DailyUpdate</Pagepath>
      <Pagepath to ="/Profile"> <span className='m-3'><CgProfile /></span> Profile </Pagepath>
      <Pagepath to ="/Logout"> <span className='m-3'><BiLogOut /></span> Logout </Pagepath>
      <Pagepath to ="*"></Pagepath>
    

     
    </div>
  )
}



















{/* <div><p className='text-white'>Quiz</p></div>
<div><p className='text-white'>Assignments</p></div>
<div><p className='text-white'>Daily update</p></div> */}