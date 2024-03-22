"use client"


import logo  from "@/assets/globus.png"
import {Navbar, Hero, Features, Forging, Empowerment, Questions} from "@/Components"
import React, { useState } from 'react';

import Link from "next/link"
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { BrowserRouter } from "react-router-dom";

export default function Page(){
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleNav = () => {
    setToggleSidebar(!toggleSidebar);
  };

  return (
    <main>
      <BrowserRouter>
      
      
      <Navbar/>
          <Hero/>
          <Features/>
          <Forging/>
          <Empowerment/>
          <Questions/>
          </BrowserRouter>
        
    </main>
  )
}