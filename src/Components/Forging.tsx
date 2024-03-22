"use client"

import Cardo from "@/assets/Frame 36.png"
import CustomButton from "./CustomButton"

const Forging = ()=>{

    const handlescroll = ()=>{

    }
    return(
        <div className="flex flex-col space-y-5 space-x-0 lg:space-y-0 lg:flex-row justify-center m-[8vw] lg:space-x-[10vw]">
            <div>
            <img src ={Cardo.src} className="w-[55vw] mx-[15vw] lg:w-[35vw] lg:mx-[0vw]" alt="acard"/>
            </div>


           <div>
           <div className="flex flex-col space-y-4 lg:space-y-0">
           <div className=" mb-[1.2vw] mx-[22vw] text-[#2CB385] bg-[#f2fdf8] border-[#d1f4e6] text-[4vw] lg:text-[1vw] h-[6vh] w-[40vw] lg:w-[11vw] lg:h-[3vw] lg:mx-[0] flex items-center justify-center rounded-full">
            Global Reach
        </div>
         
         <h1 className="text-[7vw] text-center lg:text-[2.6vw] font-bold lg:text-left">Forging strong <br/> connections worldwide</h1>
         <p className="text-[4vw] text-center mx-[4vw] text-[#868591] mt-[1vw] lg:mx-[0vw] lg:text-[1.1vw] lg:text-left">The platorm seamlessly connects workers globally while  <br className="hidden lg:block"/>nurtuting strong local communities, offering a unique<br className="hidden lg:block"/> balance between reaching a global audience</p>
         
         <CustomButton
     title="Learn more"
     containerStyles ="mt-[2vw] border border-[#627EEA] hover:bg-[#627EEA] hover:text-[#fff] bg-[#fff] rounded-full text-[#627EEA] w-[42vw] mx-[21vw] h-[6vh] lg:h-[7vh] lg:w-[15vw] lg:mx-[0vw]"
     handleClick={handlescroll} 
     />
      </div>

           </div>
        
        </div>
    )
}
export default Forging;