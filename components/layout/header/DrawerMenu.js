import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Menu, Icon, Avatar } from 'antd';
import { DownOutlined, TranslationOutlined } from '@ant-design/icons';
import { SubMenuIndicator } from '../nav-components'

import { drawerMenu } from 'config/language/bangla';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default function DrawerMenu() {

    const [menu, setMenu] = useState(null)

    useEffect(() => {
        if (!menu) setMenu(renderMenuItem(drawerMenu))
    }, [])

    const renderMenuItem = (menuData) => {
        return menuData.map((item) => {
            if (item.name) {
                return (
                    (item['nodes'] && item['nodes'].length > 0) ?
                        <SubMenu key={item.name} title={<span>{item['name']}</span>} >
                            {renderMenuItem(item['nodes'])}
                        </SubMenu>
                        :
                        <Menu.Item key={item.name}>
                            {
                                item.slug ?
                                    <Link as={`/category/${item['slug']}`} href={`/category/${item['slug']}`}>
                                        <a>{item['name']}</a>
                                    </Link> :
                                    <Link as={`/`} href={`/`}>
                                        <a>{item['name']}</a>
                                    </Link>
                            }
                        </Menu.Item>

                )
            }
        })
    }

    return (
        <Menu mode="vertical" selectedKeys={['0']}>
            {menu}
        </Menu>
    );
}