import React from "react";

import Assignmets from "./components/Assignmets";
import Lectures from "./components/Lectures";
import Quiz from "./components/Quiz";
import Sidebar from "./components/Sidebar";
import { BrowserRouter,Routes ,Route,Navigate} from 'react-router-dom';
import Mainlayout from "./components/Mainlayout";
import NotFound from "./components/NotFound";
import Dailyupdate from "./components/Dailyupdate";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import DetailAssignmets from "./components/DetailAssignmets";

function App() {
  return (
    <> <div className="flex justify-start">
    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<Navigate to="/lectures" />}/>
      


      <Route  path="/"  element={<Mainlayout />}>
        <Route path="/lectures"  element={<Lectures />} />
        <Route path="/Assignment"  element={<Assignmets />} />
        <Route path="/Quiz"  element={<Quiz />} />
        <Route path="/Daily"  element={<Dailyupdate />} />
        <Route path="/Profile"  element={<Profile />} />
        <Route path="/Logout" element={<Logout />} />
        <Route 
         path="/Assignment/:assignemt_number/details"
         element ={<DetailAssignmets />}
        />
      </Route>
     
     <Route path="*" element={<NotFound />}/>


    </Routes> 
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;











// <div className="flex h-screen justify-start ">
// <div>
//   <Sidebar />
// </div>


 
// <Lectures />
// <Assignmets />
// <Quiz />

// </div>
