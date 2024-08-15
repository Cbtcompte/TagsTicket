import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText";
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import Icons from "@/helpers/Icons";
import { insertData, updateData } from "@/helpers/services";
import { Teams } from "@/helpers/types";
import { addTeamAction, updateTeamAction } from "@/reducers/teams/actions";
import { getTeams } from "@/reducers/teams/getters";
import { Space, Table, TableProps } from "antd";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'


function EquipeCreate() {
    const teams = useSelector(getTeams)

    const [titleButton, settitleButton] = useState("Créer une équipe");
    // const [hasNotification, setHasNotification] = useState(false);
    const [errors, setErrors] = useState({
        'name': '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null)
    const dispacth = useDispatch()
    
    const columns : TableProps<Teams>['columns'] = [
        {
          title: 'Nom de l\'équipe',
          key: 'name',
          render: (value) => (<div className='d-flex' key={value.id+"_div"} >
            <div className='form-group' key={value.id+"_group"}>
              <input type="text" id={'name_'+value.id} defaultValue={value.name} className='form-control' key={value.id+"_control"}/>
            </div>
            <button type='button' key={value.id+"_button"} className='btn btn-sm btn-icon btn-success' style={{marginLeft : '10px'}} onClick={() => handleUpdateName(value.id)}>{!isLoading ? Icons({name : "EditOutlined"}) : Icons({name : "LoadingOutlined"})}</button>
          </div>),
        },
        {
          title: 'Action',
          key: 'action',
          render: (value) => (
            <Space size="middle" key={value.id+"_action"}>
              <Button className={'btn btn-icon btn-danger'} iconName={'DeleteOutlined'} action={() => {}} title={'Supprimer'} disable={false}></Button>
            </Space>
          ),
        },
      ];

    const handleUpdateName = (id:number) => {
        const data : Teams = {
            id : id,
            name : $('#name_'+id).val() as string
        }
        updateData(id, data, "equipe").then((response) => {
            dispacth(updateTeamAction(response.data as Teams))
            handleStateSubmit(response)
        })
    }
  

    const handleSubmit = (error) => {
        handleStateSubmit(error)
        setIsLoading(false)
        settitleButton("Créer une équipe")
        setErrors(error.data)
    }

    const handleStateButtom = () => {
        settitleButton("Patientez-svp...")
        setIsLoading(true)
    }

    const handleCreateTeam = (e: Event) => {
        e.preventDefault()
        const form = new FormData(formRef.current!)
        const data = {
            'name': form.get('name'),
        }

        handleStateButtom()
        insertData(data as unknown as Teams, "equipe").then((response) => {
            const dataResponse = response.data
            dispacth(addTeamAction(dataResponse as Teams))
            handleStateSubmit(response)
            setIsLoading(false)
            settitleButton("Créer une équipe")
            formRef.current!.reset()
        }).catch((error) => {
            handleSubmit(error)
        })
    }

    return <div className="py-3" >
        <Notification />
        <h4>Nouvelle équipe</h4>
        <form className="form mb-5" ref={formRef}>
            <div className="row">
                <div className="col-lg-12">
                    <InputText error={errors.name} name={"name"} controlInput={false} type={"text"} label={"Nom de l'équipe"} initValue={"Nom de l'équipe"} value={''} action={() => { }}></InputText>
                </div>
            </div>
            <div className="row">
                <div className='d-flex'>
                    <div style={{ marginRight: '5px' }}>
                        <Button disable={isLoading} className="btn btn-primary" title={titleButton} iconName={'PlusCircleOutlined'} action={(e: Event) => handleCreateTeam(e)}></Button>
                    </div>
                </div>
            </div>
        </form>
        <h4>Liste des équipes</h4>
        <Table columns={columns} dataSource={teams} pagination={false}/>
    </div>
}

export default EquipeCreate;