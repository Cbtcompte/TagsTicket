import { 
    LoadingOutlined, 
    SmileOutlined, 
    SolutionOutlined, 
    UserOutlined, 
    UserAddOutlined, 
    UsergroupAddOutlined, 
    FolderOutlined, 
    TableOutlined, 
    TagsOutlined, 
    PlusCircleOutlined,
    InfoCircleOutlined,
    CheckOutlined,
    CheckCircleOutlined,
    UploadOutlined,
    HomeOutlined,
    ExclamationCircleOutlined,
    EditOutlined,
    FileOutlined,
    TeamOutlined,
    CloseCircleOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { ReactNode } from 'react';

export interface IconElement {
    name: string
}

const Icons = ({ name }: IconElement) => {
    const listIcon: Map<string, ReactNode> = new Map()

    listIcon.set("", <></>)
    listIcon.set("FolderOutlined", <FolderOutlined />)
    listIcon.set("UserOutlined", <UserOutlined />)
    listIcon.set("UserAddOutlined", <UserAddOutlined />)
    listIcon.set("TeamOutlined", <TeamOutlined />)
    listIcon.set("UploadOutlined", <UploadOutlined />)
    listIcon.set("FileOutlined", <FileOutlined />)
    listIcon.set("UsergroupAddOutlined", <UsergroupAddOutlined />)
    listIcon.set("LoadingOutlined", <LoadingOutlined />)
    listIcon.set("SmileOutlined", <SmileOutlined />)
    listIcon.set("SolutionOutlined", <SolutionOutlined />)
    listIcon.set("TableOutlined", <TableOutlined />)
    listIcon.set("TagsOutlined", <TagsOutlined />)
    listIcon.set("PlusCircleOutlined", <PlusCircleOutlined />)
    listIcon.set("InfoCircleOutlined", <InfoCircleOutlined className='text-primary'  style={{fontSize : '20px'}}/>)
    listIcon.set("ExclamationCircleOutlined", <ExclamationCircleOutlined />)
    listIcon.set("CheckCircleOutlined", <CheckCircleOutlined />)
    listIcon.set("CheckOutlined", <CheckOutlined />)
    listIcon.set("EditOutlined", <EditOutlined />)
    listIcon.set("HomeOutlined", <HomeOutlined />)
    listIcon.set("CloseCircleOutlinedSimple", <CloseCircleOutlined />)
    listIcon.set("CloseCircleOutlined", <CloseCircleOutlined className='text-danger' style={{fontSize : '20px'}}/>)
    listIcon.set("SpinLoadingOutlined", <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin/>} />) 

    return listIcon.get(name);
}


export default Icons;