import React, { useState, Suspense } from "react";
import '../src/scss/style.scss'
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./pages/Home/About";
import Catalog from "./pages/Catalog/Catalog";
import Custom from "./pages/Custom/Custom";
import NotFound from "./pages/NotFound/NotFound";
import './i18n'
import Question from "./pages/Question/Question";


function App() {
  return (


    <Suspense fallback={"...loading"}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="question" element={<Question/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
      <Route path="custom" element={<Custom/>}/>
      
    </Routes>
    </Suspense>
    
  );
}

export default App;
