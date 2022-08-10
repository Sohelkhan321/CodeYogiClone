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

function App() {
  return (
    <> 
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
      </Route>
     
     <Route path="*" element={<NotFound />}/>


    </Routes> 
    </BrowserRouter>
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
