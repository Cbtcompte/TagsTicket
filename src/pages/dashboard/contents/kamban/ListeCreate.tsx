import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText"
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import { insertData } from "@/helpers/services";
import { Liste } from "@/helpers/types";
import { addListeTicketProjetAction } from "@/reducers/projects/actions";
import { Divider } from "antd";
import { useRef, useState } from "react"
import { useDispatch } from "react-redux";

interface DataAddListe {
    projetId : number
}

export const ListeCreate = ({ projetId } : DataAddListe)=> {
    const dispacth = useDispatch()
    const formRef = useRef(null)
    const [errors, setErrors] = useState({
        'titre': '',
    });


    const handleSubmit = () => {
        const form = new FormData(formRef.current!)
        const data = {
            'titre' : form.get('titre'),
            'projet' : projetId
        }
        insertData(data as Liste, "liste").then((response) => {
            dispacth(addListeTicketProjetAction(projetId, response.data as Liste))
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
                <div className="col-lg-12 mb-2">
                    <InputText error={errors.titre} name={"titre"} controlInput={false} type={"text"} label={"Titre de la liste"} initValue={""} value={''} action={() => { }}></InputText>
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
