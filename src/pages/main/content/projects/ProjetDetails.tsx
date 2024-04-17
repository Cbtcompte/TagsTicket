import Button from "@/components/forms/Button";
import { DateConvert } from "@/helpers/DateHelper";
import { getOneProjet } from "@/reducers/projects/getters";
import { useSelector } from "react-redux";

function ProjetDetails() {
    const projet = useSelector(getOneProjet)

    const goToDashboard = () => {
        
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
        <div className="mb-3" style={{padding: '3%', overflowY: 'scroll', height: "300px", backgroundColor : 'white'}}>
            <p style={{textJustify : 'auto'}}>{projet.description}</p>
        </div>
        <div className="">
            <Button className={"btn btn-primary"} iconName={"HomeOutlined"} action={() => goToDashboard()} title={" Accéder au tableau de bord"} disable={false}></Button>
        </div>
    </div>
    </>
}

export default ProjetDetails;