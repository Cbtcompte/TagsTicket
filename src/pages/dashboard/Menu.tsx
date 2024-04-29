import { Menu, MenuProps } from "antd";
import Icons from "@/helpers/Icons";
import { useNavigate } from "react-router-dom";
import { MenuInfo } from "rc-menu/lib/interface";
import { getTeams } from "@/reducers/teams/getters";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProjetId } from "@/reducers/projects/getters";

type MenuItem = Required<MenuProps>['items'][number];     

export function MenuView() {
    const selector = useSelector(getTeams)
    const selectorId = useSelector(getProjetId)
    const [teams, setTeams] = useState([getItem('Nouvelle équipe', 2+selector.length+2, Icons({name : 'UsergroupAddOutlined'}), 'equipes')])
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        href? : string,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            href,
            type
        } as MenuItem;
    }

    const navigate = useNavigate()

    
    const loadTeam = () => {
        const team : MenuItem[] = []
        selector.forEach((item, index) => {
            team.push(getItem(item.name, 2+(index+1), Icons({name : 'TagOutlined'}), '/dashboard/configuration/equipes/'+item.name.split(' ').join('_')+'_'+item.id))
        });

        return team;
    }

    useEffect(() => {
        const simple = [getItem('Nouvelle équipe', 2+selector.length+2, Icons({name : 'UsergroupAddOutlined'}), 'equipes')]
        const team = loadTeam()
        setTeams([...team, ...simple])
    }, [selector])

    const items: MenuItem[] = [
        getItem('Page principale', 'config', null, '', [
            getItem('Gestion du projet', '1', Icons({name : "FolderOutlined"}), '/dashboard/'+selectorId),
        ], 'group'),
        {type : 'divider'},

        getItem('Configurations', 'config', null, '', [

            getItem('Utilisateurs', 'user', Icons({name : "UserOutlined"}),'', [

                getItem('Nouveau utilisateur', '2', Icons({name : "UserAddOutlined"}), '/dashboard/configuration/users'),

            ]),

            getItem('Equipes', 'teams', Icons({name : "TeamOutlined"}),'', teams),

            getItem('Tags', 'tags', Icons({name : "TagsOutlined"}),'', [

                getItem('Vos tags', '8', Icons({name : "UnorderedListOutlined"}), '/dashboard/configuration/tags')

            ]),
        ], 'group'),

    ];

    const handleNavigate = (data : MenuInfo) => {
        navigate(data.item.props.href)
    }

    return <div className="mt-3">
        <div className="demo-logo-vertical mb-5">
            <h2 className="text-white" style={{ textAlign:'center', fontFamily : "fantasy", fontStyle : "oblique"}}>GestTask</h2>
        </div><hr />
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={items}
            onClick={(info) => handleNavigate(info)}
        />
    </div>

}