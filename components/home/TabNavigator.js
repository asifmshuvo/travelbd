import { Row, Button } from 'antd';
import { SortAscendingOutlined, ReadOutlined, VideoCameraOutlined, YoutubeOutlined } from '@ant-design/icons';

import styles from './TabNavigator.module.scss';

export const TabNavigator = ({ setTabMenu }) => {
    const menuItem = [
        {
            name: 'All',
            icon: <SortAscendingOutlined />,
            key: 'all'
        },
        {
            name: 'Articles',
            icon: <ReadOutlined />,
            key: 'article'
        },
        {
            name: 'Feature Videos',
            icon: <VideoCameraOutlined />,
            key: 'video'
        },
        {
            name: 'Quick Videos',
            icon: <YoutubeOutlined />,
            key: 'feature_video'
        }
    ]

    const renderTabMenu = (MenuItem) => {
        return menuItem.map((menu, i) => <Button key={i} onClick={() => { setTabMenu(menu.key) }} shape="round" className={styles.TabNavBtn} icon={menu.icon}>{menu.name}</Button>)
    }


    return (
        <Row className={`${styles.tabNavigatorContainer} m-4`}>
            <div className={styles.tabNavigatorWrapper}>
                {renderTabMenu()}
            </div>
        </Row>
    )

}
