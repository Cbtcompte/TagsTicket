import Icons from "@/helpers/Icons";
import { MouseEventHandler } from "react";

export interface ButtonElement {
    className : string, 
    iconName : string,
    action : MouseEventHandler, 
    title : string,
    disable : boolean
}

function Button({className, iconName, action, title, disable} : ButtonElement){
    return <>
        <button disabled={disable} className={className} onClick={action}>
            {Icons({name : iconName})} {title}
        </button>
    </>
}

export default Button;