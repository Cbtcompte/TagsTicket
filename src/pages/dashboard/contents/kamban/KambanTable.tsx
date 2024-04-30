import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";
import { extend } from '@syncfusion/ej2-base';
import { MouseEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllDataWithParam } from "@/helpers/services";
import { useSelector } from "react-redux";
import { getOneProjet, getProjetId } from "@/reducers/projects/getters";
import { loadListeTicketProjetAction } from "@/reducers/projects/actions";
import { Liste, Ticket } from "@/helpers/types";
import { useDispatch } from "react-redux";
import Button from "@/components/forms/Button";
import { getTickets } from "@/reducers/tickets/getters";
import { loadTicketAction } from "@/reducers/tickets/actions";
import { DateConvert } from "@/helpers/DateHelper";
import { ListeCreate } from "./ListeCreate";
import Icons from "@/helpers/Icons";
import { TicketCreate } from "../tickets/TicketCreate";

export function KambanView() {

    const param = useParams()
    const ticket = useSelector(getTickets)
    const projet = useSelector(getOneProjet)
    const projetId = useSelector(getProjetId)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [ticket, setTicket] = useState<Ticket[]>([] as Ticket[])

    const data = extend([], ticket, null, true)

    useEffect(() => {
        if (parseInt(param.id as string) == projetId) {
            let tick : Ticket[] = []
            getAllDataWithParam('liste/projet', parseInt(param.id as string)).then((response) => {
                dispatch(loadListeTicketProjetAction(projetId, response.data as Liste[]))
                Object.entries(response.data).map((value) => {
                    value[1].ticketDtos.map((items) => {
                        tick = [...tick, items]
                    })
                })
                dispatch(loadTicketAction(tick))
            })

        } else {
            navigate('/data_not_found')
        }
        return () => {};
    }, [])

    const handleAddList = (type : string, id : number) => {
        if(type == "Add liste"){
            dispatch({
                type : 'modals/openModal',
                payload : {footer: null, closeIcon : null, isModalOpen : true, title:'Ajouter une liste', children : (<ListeCreate projetId={parseInt(param.id as string)}></ListeCreate>)}
            })
        }else if (type == "Add ticket"){
            dispatch({
                type : 'modals/openModal',
                payload : {footer: null, closeIcon : null, isModalOpen : true, title:'Ajouter une liste', children : (<TicketCreate listeId={id}></TicketCreate>)}
            })
        }
    }

    const columnTemplate = (props: { [key: string]: string }) => {
        return <>
            <div className="row">
                <div className="col-8 text-truncate">
                    {props.headerText}
                </div>
                <div className="col-4">
                    <div style={{textAlign:'right'}}>
                       <span onClick={() => handleAddList("Add ticket", parseInt(props.keyField as string))} title="Ajouter un ticket" className={"text-primary fs-6"} style={{marginRight : '10px', cursor : 'pointer'}}>{Icons({name : "TagOutlined"})}</span> 
                       <span title="Modifier le titre" className={"text-warning fs-6"} style={{marginRight : '10px', cursor : 'pointer'}}>{Icons({name : "EditOutlined"})}</span> 
                       <span title="Supprimer la liste" className={"text-danger fs-6"} style={{textAlign : 'right', cursor : 'pointer'}}>{Icons({name : "DeleteOutlined"})}</span> 
                    </div>
                </div>
            </div>
        </>
    }

    return <>
        <div className="row mb-3">
            <div className="col-6" style={{marginLeft : '1%'}}>
                <h4 >{projet.theme}</h4>
                <p className="text-secondary text-truncate">{'Démarrage du projet : '+DateConvert(projet.startProjet as Date) } | {'Fin du projet : '+DateConvert(projet.endProjet as Date) }</p>
            </div>
            <div className="col-4">
                <div style={{textAlign : "right"}}>
                    <Button className={"btn btn-primary"} iconName={""} action={() => handleAddList("Add liste", 0)} title={"Ajouter une liste"} disable={false}></Button>
                </div>
            </div>
        </div>
        <KanbanComponent id="kanban" keyField="liste" dataSource={data} cardSettings={{ contentField: "libelle", headerField: "id" }}>
            <ColumnsDirective>
                {(projet != undefined) && ((projet.listeDtos?.length != 0) && Object.entries(projet.listeDtos!).map((value) => <ColumnDirective headerText={value[1].titre} keyField={value[1].id as number} template={columnTemplate.bind(this)} key={value[1].id} />))}
            </ColumnsDirective>
        </KanbanComponent>
    </>
}

//  const g = [
//     {
//         "id": 1,
//         "libelle": "Initialiser le projet",
//         "isClosed": false,
//         "isForEveryOne": false,
//         "dateStart": 1734912000000,
//         "dateEnd": 1734134400000,
//         "liste": 1
//     }
// ];