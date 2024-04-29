import Button from "@/components/forms/Button";
import InputText from "@/components/forms/InputText";
import Notification, { handleStateSubmit } from "@/components/tools/Notification";
import Icons from "@/helpers/Icons";
import { getAllData, insertData, updateData, deleteData } from "@/helpers/services";
import { Users } from "@/helpers/types";
import { getUsers } from "@/reducers/users/getters";
import { Space, Table, TableProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'
import { addUserAction, loadUserAction, updateUserAction } from "@/reducers/users/actions";


export function UserCreate() {
    const users = useSelector(getUsers)

    const [titleButton, settitleButton] = useState("Créer un nouveau utilisateur");
    const [errors, setErrors] = useState({
        'name': '',
        'email' : '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null)
    const dispacth = useDispatch()
    
    const columns : TableProps<Users>['columns'] = [
        {
          title: 'Nom de l\'utilisateur',
          key: 'name',
          render: (value) => (<div className='d-flex' key={value.id+"_div"} >
            <div className='form-group' key={value.id+"_group"}>
              <input type="text" id={'name_'+value.id} defaultValue={value.name} className='form-control' key={value.id+"_control"}/>
            </div>
            <button type='button' key={value.id+"_button"} className='btn btn-sm btn-icon btn-success' style={{marginLeft : '10px'}} onClick={() => handleUpdate(value.id)}>{!isLoading ? Icons({name : "EditOutlined"}) : Icons({name : "LoadingOutlined"})}</button>
          </div>),
        },
        {
          title: 'Email de l\'utilisateur',
          key: 'email',
          render: (value) => (<div className='d-flex' key={value.id+"_div_email"} >
            <div className='form-group' key={value.id+"_group_email"}>
              <input type="text" id={'email_'+value.id} defaultValue={value.email} className='form-control' key={value.id+"_control_email"}/>
            </div>
            <button type='button' key={value.id+"_button_email"} className='btn btn-sm btn-icon btn-success' style={{marginLeft : '10px'}} onClick={() => handleUpdate(value.id)}>{!isLoading ? Icons({name : "EditOutlined"}) : Icons({name : "LoadingOutlined"})}</button>
          </div>),
        },
        {
          title: 'Action',
          key: 'action',
          render: (value) => (
            <Space size="middle" key={value.id+"_action"}>
              <Button className={'btn btn-icon btn-danger'} iconName={'DeleteOutlined'} action={() => handleDelete(value.id)} title={'Supprimer'} disable={false}></Button>
            </Space>
          ),
        },
      ];
    
    const handleDelete = (id : number) => {
        deleteData(id, "utilisateur").then((response) => {
            dispacth(loadUserAction(response.data as Users[]))
            handleStateSubmit(response)
        })
    }

    const handleUpdate = (id:number) => {
        const data : Users = {
            id : id,
            name : $('#name_'+id).val() as string,
            email : $('#email_'+id).val() as string
        }
        updateData(id, data, "utilisateur").then((response) => {
            dispacth(updateUserAction(response.data as Users))
            handleStateSubmit(response)
        })
    }
  

    const handleSubmit = (error) => {
        handleStateSubmit(error)
        setIsLoading(false)
        settitleButton("Créer un nouveau utilisateur")
        setErrors(error.data)
    }

    const handleStateButtom = () => {
        settitleButton("Patientez-svp...")
        setIsLoading(true)
    }

    const handleCreateTeam = () => {
        const form = new FormData(formRef.current!)
        const data = {
            'name': form.get('name'),
            'email': form.get('email'),
        }

        handleStateButtom()
        insertData(data as unknown as Users, "utilisateur").then((response) => {
            const dataResponse = response.data
            dispacth(addUserAction(dataResponse as Users))
            handleStateSubmit(response)
            setIsLoading(false)
            settitleButton("Créer un nouveau utilisateur")
            formRef.current!.reset()
        }).catch((error) => {
            handleSubmit(error)
        })
    }

    useEffect(() => {
        // dispacth({
        //   type : 'url/changeUrl',
        //   payload : '8'
        // })
        dispacth({
            type : 'modals/openModal',
            payload : {footer: null, closeIcon : null, isModalOpen : true, title:'', children : (<p style={{fontSize : '160%', textAlign : 'center'}}><span>{Icons({name : "LoadingOutlined"})}</span> <span>{"Chargement"}</span></p>)}
        }) 
        getAllData("utilisateur").then((response) => {
            dispacth(loadUserAction(response.data as Users[]))
            dispacth({
                type : 'modals/closeModal',
                payload :  false
            })
        }).catch((error) => {
            dispacth({
                type : 'modals/openModal',
                payload : {isModalOpen : true, title:'Error', children : (<p><span>{Icons({name : "CloseCircleOutlined"})}</span> <span>{error.message}</span></p>)}
            })
        })
    }, [])

    return <div className="py-3" >
        <Notification />
        <h4>Nouveau utilisateur</h4>
        <form className="form mb-5" ref={formRef}>
            <div className="row">
                <div className="col-lg-6">
                    <InputText error={errors.name} name={"name"} controlInput={false} type={"text"} label={"Nom de l'utilisateur"} initValue={"Nom de l'utilisateur"} value={''} action={() => { }}></InputText>
                </div>
                <div className="col-lg-6">
                    <InputText error={errors.email} name={"email"} controlInput={false} type={"text"} label={"Email de l'utilisateur"} initValue={"Email de l'utilisateur"} value={''} action={() => { }}></InputText>
                </div>
            </div>
            <div className="row">
                <div className='d-flex'>
                    <div style={{ marginRight: '5px' }}>
                        <Button disable={isLoading} className="btn btn-primary" title={titleButton} iconName={'PlusCircleOutlined'} action={() => handleCreateTeam()}></Button>
                    </div>
                </div>
            </div>
        </form>
        <h4>Liste des utilisateurs</h4>
        <Table columns={columns} dataSource={users}/>
    </div>
}