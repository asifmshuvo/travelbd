import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import { Menu, Icon } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { mainMenu } from 'config/language/bangla';
import { SubMenuIndicator } from '../nav-components'

import styles from './MainMenu.module.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const MainMenu = ({ vertical }) => {
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        if (!menu) setMenu(renderMenuItem(mainMenu))
    }, [])

    const renderMenuItem = (menuData) => {
        return menuData.map((item) => {
            if (item.name) {
                return (
                    // (item['nodes'] && item['nodes'].length > 0) ?
                    //     <SubMenu key={item.name} title={<span>{item['name']} {item['name'] === 'ক্যাটাগরি' ? <SubMenuIndicator /> : null}</span>}>
                    //         {renderMenuItem(item['nodes'])}
                    //     </SubMenu>
                    //     :
                    <Menu.Item key={item.name}>
                        {
                            item.slug ?
                                <Link as={`/category/${item['slug']}`} href={`/category/${item['slug'] !== 'bangladesh' ? '[category]' : item['slug']}`}>
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
        <div className={styles.mainMenuWrapper}>
            <Menu mode={vertical ? 'vertical' : 'horizontal'} className={styles.mainMenu} style={{ minWidth: '520px' }}>
                {menu}
                {/* <SubMenu title={<span>ক্যাটাগরি <SubMenuIndicator /></span>}>
                <Menu.Item key="dhaka">ঢাকা</Menu.Item>
            </SubMenu> */}
                {/* <Menu.Item key="alipay">
                    <a href="">Contact Us</a>
                </Menu.Item> */}
            </Menu>
        </div>
    );
}
export default MainMenu;