import Link from 'next/link'
import { Row, Button, Avatar } from 'antd';
import { SortAscendingOutlined, ReadOutlined, VideoCameraOutlined, CarOutlined, CustomerServiceOutlined } from '@ant-design/icons';

import styles from './TabNavigator.module.scss';

export const TabNavigator = ({ setTabMenu }) => {

    const menuItem = [
        {
            name: 'সকল লেখা',
            icon: <SortAscendingOutlined />,
            bottom_icon: '/assets/mobile_footer_nav/articles.svg',
            key: ''
        },
        {
            name: 'ভিডিও',
            icon: <VideoCameraOutlined />,
            bottom_icon: '/assets/mobile_footer_nav/videos.svg',
            key: 'video'
        },
        {
            name: 'ট্রাভেল ডিলস',
            icon: <CarOutlined />,
            bottom_icon: '/assets/mobile_footer_nav/travel_deals.svg',
            key: 'travel_deals'
        },
        {
            name: 'সার্ভিস',
            icon: <CustomerServiceOutlined />,
            bottom_icon: '/assets/mobile_footer_nav/services.svg',
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
                    //Bottom Tab Navigator
                    menu.key ?
                        <Link href='/category/[category]' as={`/category/${menu.key}`} key={i}>
                            <Avatar shape="square" className={styles.TabNavBtn} icon={menu.icon} src={menu.bottom_icon} />
                        </Link>
                        :
                        <Link href='/' as={`/`} key={i}>
                            <Avatar shape="square" className={styles.TabNavBtn} icon={menu.icon} src={menu.bottom_icon} />
                        </Link>
                )
            }
        })

    }


    return (
        <div>
            {
                setTabMenu ?
                    //home Tab Navigator
                    <div className={`${styles.tabNavigatorContainer}`}>
                        <div className={styles.tabNavigatorWrapper}>
                            {renderTabMenu()}
                        </div>
                    </div>
                    :
                    //bottom Tab Navigator
                    <div className={`${styles.bottomTabNavigatorContainer}`}>
                        <div className={styles.tabNavigatorWrapper}>
                            {renderTabMenu()}
                        </div>
                    </div>
            }
        </div>
    )

}
