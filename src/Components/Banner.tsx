import CustomButton from "./CustomButton";
import Image from "next/image"

const Banner = ()=>{

    const handlescroll = () =>{

    }
    return(
        <div className="mx-[4vw] mt-[5vw]">
            <div className="pl-[5vw] py-[10vw] lg:py-[3vw] flex flex-col lg:flex-row space-x-[11vw] justify-center align-items items-center bg-[#627EEA] rounded-xl">
                <div className="flex flex-col space-y-5">
                    
                    <h1 className="text-[#fff] font-medium text-2xl lg:text-3xl">Connect Globally, <br/>Thrive Locally with GlobNest</h1>
                    <p className="text-[#fff] text-xs">Ready to transform the way you collaborate, connect and create?</p>

                    
                    
                    
                    <CustomButton
                         title="Get Started Today"
                         containerStyles ="bg-[#fff] text-[3.2vw] lg:text-[1.1vw] rounded-full text-[#627EEA] h-[5.5vh] w-[45vw] lg:h-[7vh] lg:w-[15vw]"
                          handleClick={handlescroll} 
        />
                    
     
                </div>

                <div className="">
                    <Image src ="/map.svg" alt = "map" height={100} width={500}/>
                </div>
            </div>

        </div>
    )
}

export default Banner;