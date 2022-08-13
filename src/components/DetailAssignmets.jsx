import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailAssignmets() {

  const data = useParams();

  return (
    <div className='flex justify-center items-center grow flex-col p-5'>
      Details of assignemt{data.assignemt_number}
    </div>
  )
}


























































// import React from 'react'
// import Assignmets from './Assignmets'
// import Dummydata from './Dummydata'

// export default function DetailAssignmets(props) {
//   return (
//     <div>
//       <div className='h-96 w-screen bg-lime-600'>
//         <h1 >This is Detail page of Assignemts</h1>
//         <h1>Map se get kiya DATA</h1>

//         <div>
//             <h1>
//               {Dummydata.map((val)=>{
//                 console.log(val)
               
//                return(
//                 <DetailAssignmets 
//                  Topic ={val.Topic}
//                  Data ={val.Data}


//                 />
//                )


//               })}
            
//             </h1>
//         </div>
      
      
       
//       </div>
//     </div>
//   )
// }


















// // /* <div>
// //          <h1>{Dummydata[0].Topic}</h1>
// //          <h1>{Dummydata[0].Data}</h1>
// //        </div>


// //        <div>
// //          <h1>{Dummydata[1].Topic}</h1>
// //          <h1>{Dummydata[1].Data}</h1>
// //        </div>


// //        <div>
// //          <h1>{Dummydata[2].Topic}</h1>
// //          <h1>{Dummydata[2].Data}</h1>
// //        </div>


// //        <div>
// //          <h1>{Dummydata[3].Topic}</h1>
// //          <h1>{Dummydata[3].Data}</h1>
// //        </div>

// //        <div>
// //          <h1>{Dummydata[4].Topic}</h1>
// //          <h1>{Dummydata[4].Data}</h1>
// //        </div>




 
