import Button from "@/components/forms/Button";
import { DateConvert } from "@/helpers/DateHelper";
import { getOneProjet } from "@/reducers/projects/getters";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProjetDetails() {
    const projet = useSelector(getOneProjet)
    const navigate = useNavigate()

    const goToDashboard = (url : string) => {
        navigate(url)
    }
    return <>
    <div className="py-3" style={{marginLeft : '10%'}}>
        <h3>{projet.theme}</h3>
        <div className="row">
            <div className="col-lg-4">
                <p className="text-secondary">{'Démarrage du projet : '+DateConvert(projet.startProjet as Date) }</p>
            </div>
            <div className="col-lg-6">
                <p className="text-secondary">{'Fin du projet : '+DateConvert(projet.endProjet as Date)}</p>
            </div>
        </div>
        <hr />
        <div className="mb-3" style={{padding: '3%', overflowY: 'scroll', height: "250px", backgroundColor : 'white', color : 'black'}}>
            <h3>Description du projet</h3>
            <p style={{textJustify : 'auto'}}>{projet.description}</p>
        </div>
        <div className="">
            <Button className={"btn btn-primary"} iconName={"HomeOutlined"} action={() => goToDashboard("/dashboard/"+projet.id)} title={" Accéder au tableau de bord"} disable={false}></Button>
        </div>
    </div>
    </>
}

export default ProjetDetails;