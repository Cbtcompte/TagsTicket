import { Card, StepProps } from 'antd'
import Step from '@/components/tools/Step';
import Button from '@/components/forms/Button';
import { useEffect, useState } from 'react';
import Icons from '@/helpers/Icons';
import ContentHandler from './ContentHandler';
import { useDispatch } from 'react-redux';

import { loadProjetAction } from '@/reducers/projects/actions';
import { Projet } from '@/helpers/types';
import { getAllData } from '@/helpers/services';
import { useSelector } from 'react-redux';
import { getProjetId } from '@/reducers/projects/getters';

function StartView() {
    const dispacth = useDispatch();
    // const projetId = useSelector(getProjetId)

    // const item: StepProps[] = [
    //     {
    //         title: 'Projets',
    //         status: 'process',
    //         icon: <Icons name='UserOutlined'></Icons>,
    //     },
    //     {
    //         title: 'Utilisateurs',
    //         status: 'wait',
    //         icon: <Icons name='SolutionOutlined'></Icons>,
    //     },
    //     {
    //         title: 'Equipe',
    //         status: 'wait',
    //         icon: <Icons name='LoadingOutlined'></Icons>,
    //     },
    //     {
    //         title: 'Done',
    //         status: 'wait',
    //         icon: <Icons name='SmileOutlined'></Icons>,
    //     },
    // ]
    // const [currentItem, setCurrentItem] = useState(0);
    // const [items, setItems] = useState(item);
    
    
    // const prev = () => {
    //     const itemCopy = items[currentItem]
    //     const itemCopy_2 = items[currentItem-1]
    //     itemCopy.status = 'wait';
    //     itemCopy_2.status = 'process';
    //     setItems([...items.slice(0, currentItem - 1), itemCopy_2, itemCopy, ...items.slice(currentItem+1)])
    //     setCurrentItem((currentItem : number) => currentItem - 1);

    // }

    // const next = () => {
    //     const itemCopy = items[currentItem]
    //     const itemCopy_2 = items[currentItem+1]
    //     itemCopy.status = 'finish';
    //     itemCopy_2.status = 'process';
    //     setItems([...items.slice(0, currentItem), itemCopy, itemCopy_2, ...items.slice(currentItem+2)])
    //     setCurrentItem((currentItem : number) => currentItem + 1);
    // }

    useEffect(() => {
        dispacth({
            type : 'modals/openModal',
            payload : {footer: null, closeIcon : null, isModalOpen : true, title:'', children : (<p style={{fontSize : '160%', textAlign : 'center'}}><span>{Icons({name : "LoadingOutlined"})}</span> <span>{"Chargement"}</span></p>)}
        }) 
        getAllData("projet").then((response) => {
            dispacth(loadProjetAction(response.data as Projet[]))
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

    return <div className='container-fluid'>
        <div className='row mt-5'>
            <div className='offset-4 col-4 offset-4' style={{textAlign : 'center'}}>
                <h1 style={{ textAlign:'center', fontFamily : "fantasy", fontStyle : "oblique", fontSize : "50px"}}>Bienvenu GestTask</h1>
                <p className='text-muted'>Afin d'accéder à votre espace de travaille, veuillez choisir le projet à manipuler  ou créer un projet </p>
            </div>
        </div>
        <Card type='inner' bordered={true} style={{ margin: '1% 4%', backgroundColor : '#001529c7', boxShadow : '0px 0px 10px #001529c7', color  : 'white' }}>
            {/* <Step value={items}></Step>
            <hr /> */}
            <ContentHandler></ContentHandler>
            {/* {projetId == 0 && <div className='d-flex flex-row-reverse' style={{ textAlign: 'right' }}>
               <div style={{marginLeft : '5px'}}>
                    <Button disable={false} className="btn btn-primary" title="Suivant" iconName={''} action={() => next()}></Button>
                </div>
              { currentItem != 0 && <div style={{marginRight : '2px'}}>
                    <Button disable={false} className="btn btn-danger" title="Précedent" iconName={''} action={() => prev()}></Button>
                </div>}
            </div>} */}
        </Card>
    </div>
}

export default StartView;