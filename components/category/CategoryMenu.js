import dynamic from 'next/dynamic';

import { Row, Button, Col } from 'antd';
const DynamicIcon = dynamic(() => import('@ant-design/icons'))

const HistorySvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M1008 511.062c0.506 273.28-222.36 496.744-495.64 496.936-118.03 0.084-226.446-41.06-311.644-109.822-22.154-17.88-23.81-51.082-3.678-71.214l22.534-22.534c17.218-17.218 44.706-19.102 63.782-3.968C346.124 850.27 425.562 880 512 880c203.41 0 368-164.622 368-368 0-203.41-164.622-368-368-368-97.628 0-186.298 37.938-252.136 99.864l101.508 101.508c20.16 20.16 5.882 54.628-22.626 54.628H48c-17.674 0-32-14.326-32-32V77.254c0-28.508 34.468-42.786 54.628-22.628l98.744 98.744C258.418 68.272 379.104 16 512 16c273.62 0 495.494 221.56 496 495.062z m-361.824 157.568l19.646-25.26c16.276-20.926 12.506-51.084-8.42-67.358L576 512.698V304c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48v271.302l130.818 101.748c20.926 16.274 51.082 12.506 67.358-8.42z" p-id="5889"></path></svg>
);
const PlaceSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M878.554433 367.195754C878.554433 164.403247 714.398713 0 512.011251 0 309.623789 0 145.423065 164.403247 145.423065 367.195754c0 80.063886 36.116508 147.841408 69.060165 214.493806 57.381369 116.067882 163.120604 298.833166 218.791783 397.754145 14.244081 25.31531 46.985215 44.734965 83.43926 44.532442s68.74513-19.127123 82.696678-44.464935c54.478546-98.853471 147.526373-257.631094 210.983417-399.05929 30.243357-67.349975 68.160065-133.70984 68.160065-213.256168z m-366.565684-120.163337a120.163336 120.163336 0 1 1 0 240.326673 120.163336 120.163336 0 0 1 0-240.326673z" p-id="6018"></path></svg>
);
const FoodSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M864 0c-88.384 0-160 71.648-160 160l0 480 128 0 0 384 192 0L1024 160C1024 71.648 952.352 0 864 0zM416 0c-17.664 0-32 14.336-32 32l0 224c0 8.832-14.336 16-32 16-17.664 0-32-7.168-32-16L320 32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32l0 224c0 8.832-14.336 16-32 16-17.664 0-32-7.168-32-16L192 32c0-17.664-14.336-32-32-32-17.664 0-32 14.336-32 32l0 224c0 8.832-14.336 16-32 16s-32-7.168-32-16L64 32c0-17.664-14.336-32-32-32S0 14.336 0 32l0 224 0 64c0 28.32 25.056 44.096 52.992 64C88.224 409.056 128 440.64 128 512l0 512 192 0L320 512c0-71.36 39.776-102.944 75.008-128C422.944 364.096 448 348.32 448 320l0-64L448 32C448 14.336 433.664 0 416 0z" p-id="5471"></path></svg>
);
const ArticleSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em"><path d="M754.2 319.7a118.85 118.85 0 0 1-118.75-118.75V64.2H208.4c-39.95 0-72.3 32.35-72.3 72.3v750.25c0 39.9 32.35 72.2 72.3 72.2h607.3c39.9 0 72.25-32.3 72.25-72.2V319.7H754.2z m14.45 478.35H255.3V749.6h513.35v48.45z m0-155H255.3v-48.4h513.35v48.4z m0-154.95H255.3v-48.4h513.35v48.4z m0 0" p-id="6147"></path><path d="M681.9 64.2v136.75c0 39.9 32.35 72.2 72.3 72.2h133.75L681.9 64.2z m0 0" p-id="6148"></path></svg>
);



const HistoryIcon = props => <DynamicIcon component={HistorySvg} {...props} />;
const PlaceIcon = props => <DynamicIcon component={PlaceSvg} {...props} />;
const FoodIcon = props => <DynamicIcon component={FoodSvg} {...props} />;
const ArticleIcon = props => <DynamicIcon component={ArticleSvg} {...props} />;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { } from '@fortawesome/free-regular-svg-icons'




import styles from './CategoryMenu.module.scss';

export const CategoryMenu = () => {

    const menuItem = [
        {
            name: 'ইতিহাস ও ঐতিহ্য',
            icon: <HistoryIcon style={{ fontSize: '48px', opacity: '0.8', marginTop: '4px' }} />
        },
        {
            name: 'দর্শনীয় স্থান',
            icon: <PlaceIcon style={{ fontSize: '48px', opacity: '0.8', marginTop: '4px' }} />
        },
        {
            name: 'খাবার',
            icon: <FoodIcon style={{ fontSize: '48px', opacity: '0.8', marginTop: '4px' }} />
        },
        {
            name: 'ভ্রমন গল্প',
            icon: <ArticleIcon style={{ fontSize: '48px', opacity: '0.8', marginTop: '4px' }} />
        }
    ]

    const renderTabMenu = (MenuItem) => {
        return menuItem.map((menu, i) => (
            <Button key={i} style={{ height: '100px', minWidth: '100px', borderRadius: '25px' }} className={styles.TabNavBtn} >
                {
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5px 0' }}>
                        {menu.icon}
                        {menu.name}
                    </div>
                }
            </Button>
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
