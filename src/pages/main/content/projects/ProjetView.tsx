import Infos from '@/components/tools/Infos';
import { Col, Row } from 'antd';
import ListElement from '@/components/Lists/ListElement';
import ProjetCreate from './ProjetCreate';
import { useSelector } from 'react-redux';
import { getProjetId, getProjets } from '@/reducers/projects/getters';
import { useState } from 'react';
import ProjetDetail from './ProjetDetails';
import { useDispatch } from 'react-redux';
import { selectProjetAction } from '@/reducers/projects/actions';

function ProjetView() {
    const projets = useSelector(getProjets);
    const projetId = useSelector(getProjetId);
    const dispacth = useDispatch()
    const [showCreateProjet, setShowCreateProjet] = useState(false);

    const buttonElement = {
        className: "btn btn-sm btn-primary",
        title: "Créer un projet",
        iconName: "PlusCircleOutlined",
        action: () => displayFormCreateProjet(),
        disable : false
    }

    const displayFormCreateProjet = () => {
        setShowCreateProjet((showCreateProjet) => !showCreateProjet)
    }

    return <Row>
        <Col span={8}>
            <div style={{ marginRight: '0%', paddingRight: '10%', overflowY: 'scroll', height: "450px" }}>
                {projets.length != 0 ? Object.entries(projets).map(([key, value]) => (<ListElement key={key}
                    title={value.theme as string}
                    description={value.description as string}
                    icon={'FolderOutlined'}
                    isButton={true}
                    classCard={projetId == value.id ? 'bg-warning' : ''}
                    isStatus={true}
                    buttonElement={
                        {...buttonElement, 'title' : projetId == value.id ? 'Désélectionner' : 'Sélectionner', 'iconName' : '', 'action' : () => dispacth(selectProjetAction(projetId != value.id ? value.id as number : 0))}
                    }
                    badgeElement={{ textBadge: value.status as string, colorBadge: 'red' }}></ListElement>)) :

                    <Infos message="Aucun projet n'a encore été créer" hasButton={false} icon='CloseCircleOutlined' buttonElement={buttonElement} ></Infos>}
            </div>
        </Col>
        <hr style={{ borderLeft: '1px dashed black' }} />
        <Col span={15}>
            <div className='row justify-content-center align-items-center'>
                {projetId == 0 || projets.length == 0 ? showCreateProjet ? <ProjetCreate actionCreateForm={displayFormCreateProjet}></ProjetCreate> :  (<div style={{ marginTop: '10%' }}><Infos
                    message="Aucun projet sélectionné. Sélectionner ou créer un projet"
                    hasButton={true}
                    icon={'InfoCircleOutlined'}
                    buttonElement={buttonElement}></Infos></div>) : <ProjetDetail></ProjetDetail>
                }

            </div>
        </Col>
    </Row>
}

export default ProjetView;