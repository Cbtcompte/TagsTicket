import { Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
type HeaderElement = {
    collapsed : boolean,
    action : (value : boolean) => void
}
export function HeaderView({collapsed, action} : HeaderElement) {


    return <>
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => action(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
    </>
}