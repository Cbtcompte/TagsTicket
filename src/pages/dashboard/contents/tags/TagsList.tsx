import { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { TagType } from '@/helpers/types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTags } from '@/reducers/tags/getters';
import Icons from '@/helpers/Icons';
import { getAllData, updateData } from '@/helpers/services';
import { loadTagAction, updateTagAction } from '@/reducers/tags/actions';
import { ColorTool } from '@/components/tools/ColorPick';
import $ from 'jquery'
import Button from '@/components/forms/Button';
import { TagsCreate } from './TagsCreate';
import Notification, { handleStateSubmit } from '@/components/tools/Notification';

export const TagsList = () => {
    const dispacth = useDispatch()
    const tags = useSelector(getTags)
    const [isLoading, setIsLoading] = useState(false)


    const handleLibelle = (value : TagType) => {
      setIsLoading(true)
      const texte = $('#libelle_'+value.id).val() as string
      value = {...value, 'libelle' : texte}
      updateData(value.id as number, value, "tag").then((response) => {
        dispacth(updateTagAction(response.data as TagType))
        setIsLoading(false)
        handleStateSubmit(response)
      })
    }

    const handleColor = (data : TagType, value : string) => {
      console.log(value)
      data = {...data, 'couleur' : value}
      updateData(data.id as number, data, "tag").then((response) => {
        dispacth(updateTagAction(response.data as TagType))
      })
    }

    const handleCreateTag = () => {
      dispacth({
        type : 'modals/openModal',
        payload : {footer: null, closeIcon : null, isModalOpen : true, title:'AJOUTER UN TAG', children : (<TagsCreate></TagsCreate>)}
    }) 
    }

    const columns: TableProps<TagType>['columns'] = [
      {
        title: 'Libellé',
        key: 'libelle',
        render: (value) => (<div className='d-flex' key={value.id+"_div"} >
          <div className='form-group' key={value.id+"_group"}>
            <input type="text" id={'libelle_'+value.id} defaultValue={value.libelle} className='form-control' key={value.id+"_control"}/>
          </div>
          <button type='button' key={value.id+"_button"} className='btn btn-sm btn-icon btn-success' style={{marginLeft : '10px'}} onClick={() => handleLibelle(value)}>{!isLoading ? Icons({name : "EditOutlined"}) : Icons({name : "LoadingOutlined"})}</button>
        </div>),
      },
      {
        title: 'Tags',
        key: 'couleur',
        render: (value) => (<ColorTool colorDefault={value.couleur} key={value.id+"_color"} action={(color : string) => handleColor(value, color)}></ColorTool>),
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

    useEffect(() => {
        // dispacth({
        //   type : 'url/changeUrl',
        //   payload : '8'
        // })
        dispacth({
            type : 'modals/openModal',
            payload : {footer: null, closeIcon : null, isModalOpen : true, title:'', children : (<p style={{fontSize : '160%', textAlign : 'center'}}><span>{Icons({name : "LoadingOutlined"})}</span> <span>{"Chargement"}</span></p>)}
        }) 
        getAllData("tag").then((response) => {
            dispacth(loadTagAction(response.data as TagType[]))
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

    return <>
    <Notification />
    <div style={{textAlign : 'right', marginRight : '15%', marginBottom : "15px"}}>
      <Button className={'btn btn-primary'} iconName={'PlusCircleOutlined'} action={() => handleCreateTag()} title={'Ajouter un tag'} disable={false}></Button>
    </div>
        <Table columns={columns} dataSource={tags} pagination={false}/>
    </>
};