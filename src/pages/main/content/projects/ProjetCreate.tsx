import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText";
import Textarea from "@/components/forms/Textarea";
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import { insertProjet } from "@/helpers/services";
import { Projet } from "@/helpers/types";
import { addProjetAction } from "@/reducers/projects/actions";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

interface CreateAction {
    actionCreateForm: (value: boolean) => void
}

function ProjetCreate({ actionCreateForm }: CreateAction) {
    const [titleButton, settitleButton] = useState("Créer le projet");
    // const [hasNotification, setHasNotification] = useState(false);
    const [errors, setErrors] = useState({
        'theme': '',
        'description': '',
        'startProjet': '',
        'endProjet': '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null)
    const dispacth = useDispatch()

    const handleSubmit = (error) => {
        handleStateSubmit(error)
        setIsLoading(false)
        settitleButton("Créer le projet")
        setErrors(error.data)
    }

    const handleStateButtom = () => {
        settitleButton("Patientez-svp...")
        setIsLoading(true)
    }

    const handleCreateProjet = (e: Event) => {
        e.preventDefault()
        const form = new FormData(formRef.current!)
        const data = {
            'theme': form.get('theme'),
            'description': form.get('description'),
            'startProjet': form.get('startProjet'),
            'endProjet': form.get('endProjet'),
        }

        handleStateButtom()
        insertProjet(data as unknown as Projet).then((response) => {
            const dataResponse = response.data
            dispacth(addProjetAction(dataResponse as Projet))
            handleStateSubmit(response)
            setIsLoading(false)
            settitleButton("Créer le projet")
            formRef.current!.reset()
        }).catch((error) => {
            handleSubmit(error)
        })
    }

    return <div className="py-3" style={{ marginLeft: '12%' }}>
        <Notification />
        <h4>Créer un nouveau projet</h4>
        <form className="form" ref={formRef}>
            <div className="row">
                <div className="col-lg-12">
                    <InputText error={errors.theme} name={"theme"} controlInput={false} type={"text"} label={"Thème du projet"} initValue={"Thème du projet"} value={''} action={() => { }}></InputText>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <InputText error={errors.startProjet} name={"startProjet"} controlInput={false} type={"date"} label={"Début du projet"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
                <div className="col-lg-6">
                    <InputText error={errors.endProjet} name={"endProjet"} controlInput={false} type={"date"} label={"Fin du projet"} initValue={""} value={''} action={() => { }}></InputText>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-lg-12">
                    <Textarea controlInput={false} name={"description"} label={""} initValue={""} value={""} action={() => { }} col={3} row={3}></Textarea>
                </div>
            </div>
            <div className="row">
                <div className='d-flex'>
                    <div style={{ marginRight: '5px' }}>
                        <Button disable={isLoading} className="btn btn-primary" title={titleButton} iconName={'PlusCircleOutlined'} action={(e: Event) => handleCreateProjet(e)}></Button>
                    </div>
                    <div style={{ marginLeft: '2px' }}>
                        <Button disable={false} className="btn btn-danger" title="Annuler" iconName={'CloseCircleOutlinedSimple'} action={() => actionCreateForm(false)}></Button>
                    </div>
                </div>
            </div>
        </form>
    </div>
}

export default ProjetCreate;