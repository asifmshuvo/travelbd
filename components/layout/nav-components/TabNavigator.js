import Link from 'next/link'
import { Row, Button } from 'antd';
import { SortAscendingOutlined, ReadOutlined, VideoCameraOutlined, CarOutlined, CustomerServiceOutlined } from '@ant-design/icons';

import styles from './TabNavigator.module.scss';

export const TabNavigator = ({ setTabMenu }) => {

    const menuItem = [
        {
            name: 'সকল লেখা',
            icon: <SortAscendingOutlined />,
            key: ''
        },
        {
            name: 'ভিডিও',
            icon: <VideoCameraOutlined />,
            key: 'video'
        },
        {
            name: 'ট্রাভেলস ডিলস',
            icon: <CarOutlined />,
            key: 'travel_deals'
        },
        {
            name: 'সার্ভিস',
            icon: <CustomerServiceOutlined />,
            key: 'service'
        }
    ]

    const renderTabMenu = (MenuItem) => {
        return menuItem.map((menu, i) => {
            if (setTabMenu) {
                return <Button key={i} onClick={() => { setTabMenu(menu.key) }} shape="round" className={styles.TabNavBtn} icon={menu.icon}>{menu.name}</Button>
            }
            else {
                return (
                    <Link href='/category/[category]' as={`/category/${menu.key}`} key={i}>
                        <Button shape="round" className={styles.TabNavBtn}>{menu.name}</Button>
                    </Link>
                )
            }
        })

    }


    return (
        <div className={`${styles.tabNavigatorContainer}`}>
            <div className={styles.tabNavigatorWrapper}>
                {renderTabMenu()}
            </div>
        </div>
    )

}
