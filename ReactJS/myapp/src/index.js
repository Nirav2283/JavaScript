import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Home , Card  , About , Contact , Navbar, Api, DetailFaculty} from './Component';
import { BrowserRouter , Routes , Route , Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));


// function Separator(props) {
//   let temp = "";
//   for (let i = 0; i < props.count; i++) {
//     temp += props.by;
//   }
//   return <h1>{temp}</h1>;
// }

function Layout(){
  
  return(
    <>
    <Navbar />
    <Outlet/>
  </>
  )
}

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/students" element={<Api/>} />
          <Route path="/students/:id" element={<DetailFaculty/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);