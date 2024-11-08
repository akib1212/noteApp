import React from 'react';
import Home from "./pages/Home.jsx";
import Alltask from "./pages/Alltask.jsx";
import Importenttask from "./pages/Importenttask.jsx";
import Completetask from "./pages/Completetask.jsx";
import Incompletetask from "./pages/Incompletetask.jsx";
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Alltask />} />
            <Route path='/importantTasks' element={<Importenttask />} />
            <Route path='/completedTasks' element={<Completetask />} />
            <Route path='/incompletedTasks' element={<Incompletetask />} />
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
