
"use client"

import firstpic from "@/assets/Frame 27 (1).png"
import secondpic from "@/assets/Frame 27 (2).png"
import thirdpic from "@/assets/Frame 27 (3).png"
import fourthpic from "@/assets/Frame 27 (4).png"

import CustomButton from "./CustomButton"

const Features = ()=>{
    const handlescroll = ()=>{

    }
    return(
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-3 gap-[5vw] m-[5vw] ">
            <div>
                <h1 className="text-[7vw] text-center lg:text-[2vw] lg:leading-normal lg:text-left font-bold">Features for <br/> communication solution</h1>
                <p className="text-[4vw] text-center lg:text-[#868591] lg:text-[1.1vw] lg:text-left mt-[0.8vw]">Our robust Features are crafted to enhance <br/>
                collaboration, streamline interaction fostering connections across the globe</p>
            </div>

            <CustomButton
        title="See more solution"
        containerStyles ="bg-[#627EEA] mx-[22vw] rounded-full text-[#fff] text-[4vw] lg:text-[2.9vw] h-[5.5vh] w-[45vw] mt-[2vw] mb-[4vw] lg:mb-[0vws] lg:hidden"
        handleClick={handlescroll} 
        /> 

            <div className="text-center lg:text-left">
                <img src ={firstpic.src} className="mb-[1.1vw] mx-[38vw] lg:mx-[0vw]" alt="first"/>
                <h1 className="text-[6vw] text-[#627EEA] font-bold mb-[0.8vw] lg:text-[1.3vw]">Real time collaboration</h1>
                <p className="text-[4vw] text-[#868591] lg:text-[1.1vw]">Instant messaging, audio and video calls for seamless real time collaboration.</p>
            </div>

            <div className="text-center lg:text-left">
            <img src ={secondpic.src} className="mb-[1.1vw] mx-[38vw] lg:mx-[0]" alt="second"/>
                <h1 className="text-[6vw] text-[#627EEA] font-bold mb-[0.8vw] lg:text-[1.3vw]">Scan and Match</h1>
                <p className="text-[4vw] text-[#868591] lg:text-[1.1vw]">Our scan and match feature intelligently identifies and pairs you with like minded collaborators.</p>
            </div>

            <div>
            <CustomButton
        title="See more solution"
        containerStyles ="hidden lg:bg-[#627EEA] lg:block lg:rounded-full lg:text-[#fff] lg:text-[1vw] lg:h-[7vh] lg:w-[15vw] lg:mt-[8vw]"
        handleClick={handlescroll} 
        /> 

            </div>
            <div className="text-center lg:text-left">
                <img src={thirdpic.src} className="mb-[1.1vw] mx-[38vw] lg:mx-[0]" alt="third"/>
                <h1 className="text-[6vw] text-[#627EEA] font-bold mb-[0.8vw] lg:text-[1.3vw]">Privacy at the Core</h1>
                <p className="text-[4vw] text-[#868591] lg:text-[1.1vw]">Communicate with confidence using end to end encyption, ensuring evey converstion is private and secure.</p>
            </div>

            <div className="text-center lg:text-left">
            <img src ={fourthpic.src} className="mb-[1.1vw] mx-[38vw] lg:mx-[0]" alt="fourth"/>
                <h1 className="text-[6vw] text-[#627EEA] font-bold mb-[0.8vw] lg:text-[1.3vw]">Unified messaging Hub</h1>
                <p className="text-[4vw] text-[#868591] lg:text-[1.1vw]">One hub for all communication channels,chats and connection forum</p>
            </div>
        </div>
    )
}
export default Features;