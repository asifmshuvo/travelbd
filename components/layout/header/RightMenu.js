import React, { Component } from 'react';

import { Menu, Icon, Avatar } from 'antd';
import { DownOutlined, TranslationOutlined } from '@ant-design/icons';
import { SubMenuIndicator } from '../nav-components'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class RightMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <a href="">{<span><Avatar shape="square" size={32} icon={<TranslationOutlined />} src="/assets/logo/translation_icon.png" /> En</span>}</a>
                </Menu.Item>
                {/* <Menu.Item key="app">
                    <a href="">Signup</a>
                </Menu.Item> */}
            </Menu>
        );
    }
}
export default RightMenu;