import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">{<span>ভাষা <DownOutlined /></span>}</a>
                </Menu.Item>
                {/* <Menu.Item key="app">
                    <a href="">Signup</a>
                </Menu.Item> */}
            </Menu>
        );
    }
}
export default RightMenu;