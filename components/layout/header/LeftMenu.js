import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
    render() {
        return (
            <Menu mode="horizontal">
                <Menu.Item key="article">
                    <a href="">আর্টিকেল</a>
                </Menu.Item>
                <Menu.Item key="video">
                    <a href="">ভিডিও</a>
                </Menu.Item>
                <Menu.Item key="quick_video">
                    <a href="">কুইক ভিডিও</a>
                </Menu.Item>
                <SubMenu title={<span>ক্যাটাগরি</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">ক্যাটাগরি 1</Menu.Item>
                        <Menu.Item key="setting:2">ক্যাটাগরি 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">ক্যাটাগরি 3</Menu.Item>
                        <Menu.Item key="setting:4">ক্যাটাগরি 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                {/* <Menu.Item key="alipay">
                    <a href="">Contact Us</a>
                </Menu.Item> */}
            </Menu>
        );
    }
}
export default LeftMenu;