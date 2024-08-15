import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText"
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import { insertData } from "@/helpers/services";
import { Ticket } from "@/helpers/types";
import { Divider } from "antd";
import { useRef, useState } from "react"
import { useDispatch } from "react-redux";

interface DataAddListe {
    listeId : number
}

export const TicketCreate = ({ listeId } : DataAddListe)=> {
    const dispacth = useDispatch()
    const formRef = useRef(null)
    const [errors, setErrors] = useState({
        'libelle': '',
    });


    const handleSubmit = () => {
        const form = new FormData(formRef.current!)
        const data = {
            'libelle' : form.get('libelle'),
            'dateStart' : form.get('dateStart'),
            'dateEnd' : form.get('dateEnd'),
            'liste' : listeId
        }
        insertData(data as Ticket, "ticket").then((response) => {
            // dispacth(addListeTicketProjetAction(listeId, response.data as Liste))
            console.log(response)
            handleStateSubmit(response)
        }).catch((error) => {
            handleStateSubmit(error)
            setErrors(error.data)
        })
    }

    const handleAnnuler = () => {
        dispacth({
            type : 'modals/closeModal',
            payload :  false
        })
    }
    return <>
        <Notification />
        <form className="form mt-4" ref={formRef}>
            <div className="row mb-3">
                <div className="col-lg-4 mb-2">
                    <InputText error={errors.libelle} name={"libelle"} controlInput={false} type={"text"} label={"Titre de la liste *"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
                <div className="col-lg-4 mb-2">
                    <InputText error={""} name={"dateStart"} controlInput={false} type={"date"} label={"Date de début"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
                <div className="col-lg-4 mb-2">
                    <InputText error={""} name={"dateEnd"} controlInput={false} type={"date"} label={"Date de fin"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
                <Divider></Divider>
            </div>
            <div className="row">
                <div className="offset-6 col-3">
                <Button className={"btn btn-primary"} iconName={""} action={() => handleSubmit()} title={"Enregistrer"} disable={false}></Button>
                </div>
                <div className="col-3">
                <Button className={"btn btn-danger"} iconName={""} action={() => handleAnnuler()} title={"Annuler"} disable={false}></Button>
                </div>
            </div>
        </form>
    </>
}
