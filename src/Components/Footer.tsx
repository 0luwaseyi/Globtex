"use client"

import { footer_links } from "../../types/index"
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"



const Footer = () => {
    const handlescroll = () =>{

    }
  return (
    <div className='bg-[#fff] mt-[10vw] lg:mt-[5vw]'>
       <footer className='flex flex-col pl-[5vw] ml-[6vw] lg:ml-0 space-x-0 space-y-4 lg:space-y-0 lg:flex lg:flex-row text-[#fff] pt-[5vw] lg:space-x-[4vw] justify-around'>
        <div className='flex flex-col space-y-[5vw] lg:space-y-[2vw] mb-[8vw] lg:mb-0'>
            <div className="flex space-x-3">
            <Image src="/facebook.svg" alt="facebook" width={30} height={10}/>
            <Image src="/instagram.svg" alt="instagram" width={30} height={10}/>
            <Image src="/linkedin.svg" alt="linkedin" width={30} height={10}/>

            </div>

            <div className="flex flex-row">
                <input type="email" placeholder="Enter Your Email" className="border border-[#868591]-100 p-3 text-sm bg-[#868591]-100 w-[80vw] lg:w-[20vw] text-[#000] focus:border-[#627EEA]-500 focus:outline-none focus:ring-2 focus:ring-[#627EEA]-500  rounded-full"/>
                <CustomButton
                title="Subscribe"
                 containerStyles ="bg-[#627EEA] text-[3.7vw] lg:text-[1vw] rounded-full text-[#fff] h-[6.5vh] w-[30vw] lg:h-[7vh] lg:w-[10vw] ml-[-30vw] lg:ml-[-6vw]"
                 handleClick={handlescroll} 
        />
                  

            </div>

            <div>
                

        <p className="text-xs text-[#868591]">Subscribe to stay in the loop with our latest hub tips, <br/> exclusive offers and exciting product launches</p>
            </div>

            
    

        </div>
       
        <div className='flex flex-col space-y-[5vw] lg:flex lg:flex-row lg:space-x-[10vw] lg:justify-between lg:space-y-[0vw]'>
          {footer_links.map(( link )=>(
            <div key ={link.title}
            className = "flex flex-col lg:flex lg:flex-col space-y-[0.9vw]">
                <h3 className = "text-sm font-medium text-[#627EEA]">{link.title}</h3>
                <p className='text-xs text-[#868591] flex flex-col lg:flex lg:flex-col lg:text-[0.8vw] space-y-[0.8vw]'>
                {link.links.map((item)=> (
                    <Link 
                    key = {item.title}
                    href = {item.url}
                    className="">
                        {item.title}
                    </Link>
                ))}
                </p>
             
                </div>
          ))}  
        </div>

      
     

       </footer>
    <div className="mt-[6vw] mx-[4vw]">
    <hr/>
    </div>
       

       

       <div className='flex justify-between justify-start mt-[3vw] mx-[7vw] pb-[3vw]'>
           <div className='text-[#D1CCD1] text-sm'>
            <p>@2022-2023.All Right Reserved</p>
           </div>

           <div className='flex space-x-3 text-[#8C8989] text-sm'>
            <Link href ={"/"}>
            <p>Privacy policy</p>
            </Link>
            <Link href ={"/"}>
            <p>Terms of service</p>    
            </Link>
            <Link href ={"/"}>
            <p>Disclosure</p>     
            </Link>

           </div>
        </div>
    </div>

  )
}

export default Footer