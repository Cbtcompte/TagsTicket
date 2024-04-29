import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText"
import { ColorTool } from "@/components/tools/ColorPick";
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import { insertData } from "@/helpers/services";
import { TagType } from "@/helpers/types";
import { addTagAction } from "@/reducers/tags/actions";
import { Divider } from "antd";
import { useRef, useState } from "react"
import { useDispatch } from "react-redux";

export const TagsCreate = () => {
    const dispacth = useDispatch()
    const [couleur, setCouleur] = useState("#17732c")
    const formRef = useRef(null)
    const [errors, setErrors] = useState({
        'libelle': '',
        'couleur': '',
    });

    const handleCouleur = (value : string) => {
        setCouleur(value)
    }

    const handleSubmit = () => {
        const form = new FormData(formRef.current!)
        const data = {
            'libelle' : form.get('libelle'),
            'couleur' : couleur
        }
        insertData(data as TagType, "tag").then((response) => {
            dispacth(addTagAction(response.data as TagType))
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
                <div className="col-lg-6 mb-2">
                    <InputText error={errors.libelle} name={"libelle"} controlInput={false} type={"text"} label={"Libellé"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
                <div className="col-lg-6 mt-4">
                   <ColorTool colorDefault={couleur} action={(value) => handleCouleur(value) }></ColorTool>
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