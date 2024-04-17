import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';
import $ from "jquery";

export type NotificationType = {
    codeStatus: number,
    message: string,
    placement: NotificationArgsProps['placement'],
    // isNotification : boolean
};

let data : NotificationType = {
    codeStatus: 200,
    message: "",
    placement: "bottom",
}

export const handleStateSubmit = (error: { codeStatus: number; message: string; }) => {
    data = {...data, codeStatus: error?.codeStatus, message: error?.message }
    $('#triggerBtn').trigger('click')
}

function Notification() {
    const [api, contextHolder] = notification.useNotification();
    
    const openNotification = () => {
        const type = data.codeStatus != 200 ? "error" : "success"
        const description = data.codeStatus != 200 ? "Vérifier si les champs sont bien renseignés" : "Vos informations sont enregistrées avec success"
        switch (type) {
            case 'success':
                api.success({
                    message: data.message,
                    description: description,
                    placement: data.placement,
                });
                break;
            case 'error':
                api.error({
                    message: data.message,
                    description: description,
                    placement: data.placement,
                });
                break;

            default:
                break;
        }
    };

    return (
        <>
            <button type="button" style={{display : 'none'}} id='triggerBtn' onClick={openNotification}></button>
            {contextHolder}
        </>
    );
}

export default Notification;