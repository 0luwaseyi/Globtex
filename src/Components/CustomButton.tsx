
"Use client"

import { CustomButtonProps } from "../../types"

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps)=>{
    return(
        <button
        disabled = {false}
        className={containerStyles}
        onClick={()=>{}}>
            <span>
               {title}
            </span>
        </button>
    )

}

export default CustomButton