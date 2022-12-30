import React from "react";
import Login from "./components/Login/Login"
import Adminpage from "./components/Admin/AdminPage";
import ReservationPage from "./components/Reservation/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Adminpage" element={<Adminpage />}></Route>
          <Route path="/ReservationPage" element={<ReservationPage />}></Route>
        </Routes>
    </BrowserRouter>
  </div>
  )
};

export default App;
