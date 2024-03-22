"use client"

import Carder from "@/assets/Frame 36 (1).png"
import CustomButton from "./CustomButton"
import arrowone from "@/assets/carbon_arrow-up.png" 

const Empowerment = ()=>{

  
    return(
        <div className="flex flex-col space-x-0 space-y-5 lg:flex-row lg:space-y-0 justify-center m-[8vw] space-x-[11.8vw]">
           <div>
           <div className="flex flex-col space-y-[4vw] lg:space-y-0">
           <div className="mb-[1.2vw] text-[#2CB385] bg-[#f2fdf8] border-[#d1f4e6] text-[4vw] mx-[22vw] lg:text-[1vw] h-[6vh] w-[40vw] lg:w-[11vw] lg:h-[3vw] lg:mx-[0vw] flex items-center justify-center rounded-full">
            Global Scaling
        </div>
         
         <h1 className="text-[7vw] text-center lg:text-left lg:text-[2.6vw] font-bold">Empowerment for <br/>businesses and individuals</h1>
         <p className="text-[4vw] text-center text-[#868591] mt-[1vw] lg:text-[1.1vw] lg:text-left">Businesses and individuals can thrive on a global scale, <br className="hidden lg:block"/>empowered by the platform to expand their reach and connect<br className="hidden lg:block"/>with like-minded individuals worldwide.</p>
         
         <CustomButton
     title="Learn more"
     containerStyles ="mt-[2vw] border border-[#627EEA] hover:bg-[#627EEA] hover:text-[#fff] bg-[#fff] rounded-full text-[#627EEA] w-[42vw] mx-[21vw] h-[6vh] lg:h-[7vh] lg:w-[15vw] lg:mx-[0vw]"
     handleClick={()=>{}} 
     />
      </div>

           </div>
           <div>
            <img src ={Carder.src} className="w-[55vw] mx-[4vw] lg:w-[35vw] lg:mx-[0vw]" alt="acard"/>
            </div>
        
        </div>
    )
}
export default Empowerment;