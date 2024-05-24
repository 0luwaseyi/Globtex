"use client"

import CustomButton from "./CustomButton";
import  avideo  from "@/assets/video icon.png";
import location from "@/assets/map.png";

const Hero = ()=>{

   const handlescroll = () =>{

   }
   return(
      <div className="mt-[35vw] lg:mt-[13vw]">
        <div className=" w-[65vw] mb-[2vw] h-[6vh] ml-[18vw] lg:ml-[40vw] lg:mb-[1.2vw] text-[#2CB385] bg-[#f2fdf8] border-[#d1f4e6] lg:w-[18vw] lg:h-[3vw] flex items-center justify-center rounded-full">
            Join over +35k community
        </div>
        <h1 className="text-center mx-[1.2vw] font-bold lg:font-medium leading-tight text-[7.8vw] mb-[2vw] lg:text-[3.8vw] lg:mb-[1.2vw]">Creating Local Connections And <br className="hidden lg:block"/> Building Local Communities</h1>
        <p className="text-center text-[#868591] text-[4vw] text-wrap lg:text-[1.4vw]">We bridge the gap between borders, empowering businesses and <br className = "hidden lg:block"/> individuals to thrive on a global scale</p>
      

      <div className="flex flex-col my-[6vw] justify-center ml-[27vw] space-y-3 space-x-0 lg:space-x-3 lg:ml-[0vw] lg:space-y-0 lg:flex-row lg:justify-center mt-[2vw]">
      <CustomButton
        title="Get Started Today"
        containerStyles ="bg-[#627EEA] text-[3.2vw] lg:text-[1.1vw] rounded-full text-[#fff] h-[5.5vh] w-[45vw] lg:h-[7vh] lg:w-[15vw]"
        handleClick={handlescroll} 
        />

        <div className="mb-[6vw] flex space-x-2 lg:mb-[0] ">
        <img src = {avideo.src} className="pointer" alt="demo-video"/>
        <p className="text-[#868591] mt-[1vw]">Watch a Demo</p>

        </div>
      

      </div>

      <img src = {location.src} className="mt-[4vw]" alt="map"/>
       
      </div>
   )
}

export default Hero