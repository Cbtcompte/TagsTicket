import { Menu, MenuProps } from "antd";
import Icons from "@/helpers/Icons";

type MenuItem = Required<MenuProps>['items'][number];

export function MenuView() {

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Gestion du projet', '1', Icons({name : "FolderOutlined"})),
        getItem('Utilisateurs', 'sub1', Icons({name : "UserOutlined"}), [
            getItem('Nouveau utilisateur', '2', Icons({name : "UserAddOutlined"})),
            getItem('Bill', '3'),
            getItem('Alex', '4'),
        ]),
        getItem('Equipes', 'sub2', Icons({name : "TeamOutlined"}), [getItem('Team 1', '5'), getItem('Team 2', '6'), getItem('Nouvelle équipe', '7', Icons({name : 'UsergroupAddOutlined'}))]),
        getItem('Tags', 'sub3', Icons({name : "TagsOutlined"}), [getItem('Team 1', '8'), getItem('Team 2', '9')]),
    ];


    return <div className="mt-3">
        <div className="demo-logo-vertical">
            <h2 className="text-white" style={{ textAlign:'center', fontFamily : "fantasy", fontStyle : "oblique"}}>GestTask</h2>
        </div><hr />
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
        />
    </div>

}