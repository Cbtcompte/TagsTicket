import { useState } from 'react';
import { Layout, theme } from 'antd';
import { MenuView } from './Menu';
import { HeaderView } from './Header';
import { Footer } from 'antd/es/layout/layout';
import { BreadcrumbView } from './Breadcrumb';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const MainDashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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