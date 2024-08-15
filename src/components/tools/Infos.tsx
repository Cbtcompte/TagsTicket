import Icons from "@/helpers/Icons";
import Button, { ButtonElement } from "../forms/Button";

interface InfosElement{
    message : string,
    hasButton : boolean,
    icon : string,
    buttonElement : ButtonElement
}

function Infos({message, hasButton, icon, buttonElement} : InfosElement) {
    return <div className='text-center'>

    <Icons name={icon}/>
    <h6>{message}</h6>
   {hasButton && <Button className={buttonElement.className} title={buttonElement.title} iconName={buttonElement.iconName} action={buttonElement.action}></Button>}
</div>
}

export default Infos;