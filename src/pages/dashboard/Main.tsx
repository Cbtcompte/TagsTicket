import { useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import { MenuView } from './Menu';
import { HeaderView } from './Header';
import { Footer } from 'antd/es/layout/layout';
import { BreadcrumbView } from './Breadcrumb';
import { Outlet } from 'react-router-dom';
import { registerLicense } from'@syncfusion/ej2-base'
import { useDispatch } from 'react-redux';
import { loadTeamAction } from '@/reducers/teams/actions';
import { Projet, Teams } from '@/helpers/types';
import { getAllData } from '@/helpers/services';
import { loadProjetAction } from '@/reducers/projects/actions';
import Icons from '@/helpers/Icons';

const { Header, Sider, Content } = Layout;

const MainDashboard = () => {
    const dispacth = useDispatch()
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        getAllData("equipe").then((response) => {
            dispacth(loadTeamAction(response.data as Teams[]))
        })

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


    registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXtfeHRdRWdfV0xyXkE=')

    return (
        <div className=''>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} width={250} collapsedWidth={150}>
                    <MenuView></MenuView>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <HeaderView collapsed={collapsed} action={(value) => setCollapsed(value)}></HeaderView>
                    </Header>
                    <div style={{ marginLeft: '24px', marginTop: '10px' }}>
                        <BreadcrumbView></BreadcrumbView>
                    </div>
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 300, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                       <Outlet/>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default MainDashboard;