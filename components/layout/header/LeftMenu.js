import React, { Component } from 'react';

import { Menu, Icon } from 'antd';
import { DownOutlined } from '@ant-design/icons';

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
                <SubMenu title={<span>ক্যাটাগরি <DownOutlined /></span>}>
                    <Menu.Item key="dhaka">ঢাকা</Menu.Item>
                    <Menu.Item key="">খুলনা</Menu.Item>
                    <Menu.Item key="">রাজশাহী</Menu.Item>
                    <Menu.Item key="">সিলেট</Menu.Item>
                    <Menu.Item key="">বরিশাল</Menu.Item>
                    <Menu.Item key="">চট্টগ্রাম</Menu.Item>
                    <Menu.Item key="">রংপুর</Menu.Item>
                    <Menu.Item key="">ময়মনসিংহ</Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="alipay">
                    <a href="">Contact Us</a>
                </Menu.Item> */}
            </Menu>
        );
    }
}
export default LeftMenu;