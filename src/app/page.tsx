"use client"


import logo  from "@/assets/globus.png"
import {Navbar, Hero, Features, Forging, Empowerment, Questions} from "@/Components"
import Accordioncomp from "@/Components/Accordioncomp"
import Banner from "@/Components/Banner"
import Footer from "@/Components/Footer"





export default function Page(){
  

  return (
    <main>
      
      
      
      <Navbar/>
          <Hero/>
          <Features/>
          <Forging/>
          <Empowerment/>
          <Questions/>
          <Accordioncomp/>
          <Banner/>
          <Footer/>
        
        
    </main>
  )
}