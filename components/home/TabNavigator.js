import { Row, Button } from 'antd';
import { SortAscendingOutlined, ReadOutlined, VideoCameraOutlined, YoutubeOutlined } from '@ant-design/icons';

import styles from './TabNavigator.module.scss';

export const TabNavigator = () => {
    const menuItem = [
        {
            name: 'All',
            icon: <SortAscendingOutlined />
        },
        {
            name: 'Articles',
            icon: <ReadOutlined />
        },
        {
            name: 'Feature Videos',
            icon: <VideoCameraOutlined />
        },
        {
            name: 'Quick Videos',
            icon: <YoutubeOutlined />
        }
    ]

    const renderTabMenu = (MenuItem) => {
        return menuItem.map(menu => <Button shape="round" className={styles.TabNavBtn} icon={menu.icon}>{menu.name}</Button>)
    }


    return (
        <Row className={`${styles.tabNavigatorContainer} m-4`}>
            <div className={styles.tabNavigatorWrapper}>
                {renderTabMenu()}
            </div>
        </Row>
    )

}
