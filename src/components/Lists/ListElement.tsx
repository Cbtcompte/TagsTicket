import Icons from '@/helpers/Icons';
import Button, { ButtonElement } from '../forms/Button';
import { Card } from 'antd';
import BadgeTool, { ElementBadge } from '../tools/BadgeTool';

interface ListElement {
    title : string,
    description : string,
    icon : string,
    classCard : string,
    isButton : boolean,
    isStatus : boolean,
    buttonElement : ButtonElement | undefined
    badgeElement : ElementBadge | undefined
}


function ListElement({title, description, icon, isButton, isStatus, buttonElement, badgeElement, classCard} : ListElement) {

    const element =  <div  className='mb-3'>
        <Card size="small"  className={classCard}>
                    <div className='row' style={{ margin: '0px', cursor : 'pointer' }}>
                        <div className="col-1">
                            <Icons name={icon}/>
                        </div>
                        <div className={isButton ? "col-6 text-truncate" : "col-9 text-truncate"}>
                            <h6>{title}
                                <p className='text-secondary text-truncate' style={{ fontSize: '12px' }}>{description}</p>
                            </h6>
                        </div>
                        {isButton && <div className='col-5'><Button className={buttonElement!.className} iconName={buttonElement!.iconName} action={buttonElement!.action} title={buttonElement!.title} disable={buttonElement!.disable}></Button></div>}
                    </div></Card>
        </div>

    return <>
        {isStatus ? <BadgeTool testColor={badgeElement!} >
                    {element}
            </BadgeTool> : <>{element}</>}
    </>
}

export default ListElement;