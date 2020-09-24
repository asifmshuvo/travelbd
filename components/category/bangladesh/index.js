import dynamic from 'next/dynamic';
import Link from 'next/link'

import { Row, Button, Col, Card, Avatar } from 'antd';
const DynamicIcon = dynamic(() => import('@ant-design/icons'))
import { mainMenu } from 'config/language/bangla';

const { Meta } = Card;




const HistoryIcon = props => <DynamicIcon component={HistorySvg} {...props} />;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'




import styles from '../CategoryMenu.module.scss';
import divisionStyles from './Division.module.scss';


const Bangladesh = () => {
    const divisionArr = mainMenu?.filter(item => item.slug === 'bangladesh')[0].nodes ?? []

    console.log('Log: Division -> divisionArr', divisionArr)

    const renderTabMenu = (MenuItem) => {
        return divisionArr.map((menu, i) => (
            <Link as={`/category/bangladesh/${menu.slug}`} href="/category/bangladesh/[division]" >
                <Card
                    hoverable
                    style={{ minWidth: 150, minHeight: 150, borderRadius: '8px', margin: '5px' }}
                    className={divisionStyles.card}
                    cover={<Avatar shape="square" size={64} className={divisionStyles.cardMapIcon} src={`/assets/division_icon/${menu.slug}.svg`} />}
                >
                    <Meta title={<center>{menu.name}</center>} />
                </Card>
                {/* <Button key={i} style={{ height: '85px', minWidth: '85px', borderRadius: '20px' }} className={styles.TabNavBtn} >
                    {
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '5px 0' }}>
                            {/* <div style={{ minHeigth: '28px' }}>{menu.icon || ''}</div> */}
                {/* <span>{menu.name}</span>
                        </div>
                    }
                </Button> */}
            </Link>
        ))
    }


    return (
        <Row className={`${styles.tabNavigatorContainer} m-4`}>
            <div className={styles.tabNavigatorWrapper}>
                {renderTabMenu()}
            </div>
            <div className="custom-icons-list">
                {/* <HeartIcon style={{ fontSize: '14px' }} /> */}
            </div>
        </Row>
    )

}

export default Bangladesh
