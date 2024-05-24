
import logo from "@/assets/logo.svg"
import Link from "next/link"
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useState } from 'react';




const Navbar = ()=>{

    

    const [toggleSidebar, setToggleSidebar] = useState(false);

  const toggleNav = () => {
    setToggleSidebar(!toggleSidebar);
  };
    return(
        <div className="flex flex-row px-[0vw]  lg:px-[4vw]  justify-between items-center fixed top-0 w-full  z-10 bg-[#fff]">
            
            <div className="flex justify-between items-center ml-[5vw]">
            <img className="pt-2" src = {logo.src}/>
            
                </div>
                
                <div className="flex space-x-[3vw] p-3 list-none ">
                    <Link href ={"/"}><li className="text-[#677680] hover:text-[#627EEA]">Features</li></Link>
                    <Link href ={"/"}><li className="text-[#677680] hover:text-[#627EEA]" >Community</li></Link>
                    <Link href ={"/"}><li className="text-[#677680] hover:text-[#627EEA]">About</li></Link>
                    <Link href ={"/"}><li className="text-[#677680] hover:text-[#627EEA]">Support</li></Link>
                    <Link href ={"/"}><li className="text-[#677680] hover:text-[#627EEA]">FAQ?</li></Link>
                </div>

                <div className="flex space-x-4">
                    <button className="w-[12vw] border border-[#f0f3f5] bg-[#f0f3f5] hover:bg-[#fff] hover:text-[#000] hover:border-[#000] text-[#606060] text-[1.1vw] p-2 outline-none rounded-full cursor-pointer outline-none">Get Started Now</button>
                    
                </div>

            
           
                <div className={`sm:hidden flex h-[8vh] px-[0vw] fixed top-0 w-full  z-10 bg-[#fff] shadow-medium ml-[0vw]  md:hidden flex-row`}>
            {toggleSidebar ? (
              <AiFillCloseCircle className="cursor-pointer w-[10vw] h-[13vh] mt-[-4vw] ml-[5vw]" onClick={toggleNav} />
            ) : (
              <HiMenu className="cursor-pointer w-[10vw] h-[13vh] mt-[-4vw] ml-[5vw]" onClick={toggleNav} />
            )}
            <Link href={"/"}>
              <div className='flex mt-[6vw] ml-[5vw]'>
                <img src={logo.src} className="h-[5vh]" alt="logo"/>
        
              </div>
            </Link>
            {toggleSidebar && (
              <div className='fixed w-[80vw] h-screen p-0 mt-[18vw] bg-white z-10 animate-ease-in'>
                <div className='flex flex-col space-y-4 text-center my-[26vw] text-[#10A36C]'>
                  <h1>Features</h1>
                  <h1>Community</h1>
                  <h1>About</h1>
                  <h1>Support</h1>
                  <h1>FAQ?</h1>
                </div>
              </div>
            )}
          </div>
         
        </div>

    )
}

export default Navbar