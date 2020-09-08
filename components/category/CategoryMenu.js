import dynamic from 'next/dynamic';

import { Row, Button, Col } from 'antd';
const DynamicIcon = dynamic(() => import('@ant-design/icons'))

const HistorySvg = () => (
    <svg width="1em" height="1em" aria-hidden="true" viewBox="0 0 640 512" focusable="false" data-prefix="fas" data-icon="mosque" class="svg-inline--fa fa-mosque fa-w-20"><path fill="currentColor" d="M0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160H0v320zm579.16-192c17.86-17.39 28.84-37.34 28.84-58.91 0-52.86-41.79-93.79-87.92-122.9-41.94-26.47-80.63-57.77-111.96-96.22L400 0l-8.12 9.97c-31.33 38.45-70.01 69.76-111.96 96.22C233.79 135.3 192 176.23 192 229.09c0 21.57 10.98 41.52 28.84 58.91h358.32zM608 320H192c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h32v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h32c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM64 0S0 32 0 96v32h128V96c0-64-64-96-64-96z"></path></svg>
);
const PlaceSvg = () => (
    <svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marked-alt" class="svg-inline--fa fa-map-marked-alt fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>
);
const FoodSvg = () => (
    <svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hamburger" class="svg-inline--fa fa-hamburger fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"></path></svg>
);
const ArticleSvg = () => (
    <svg width="1em" height="1em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bus" class="svg-inline--fa fa-bus fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8c-13.25 0-24 10.74-24 24v80c0 13.25 10.75 24 24 24h8v160c0 17.67 14.33 32 32 32v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h192v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h6.4c16 0 25.6-12.8 25.6-25.6V256h8c13.25 0 24-10.75 24-24v-80c0-13.26-10.75-24-24-24zM112 400c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm16-112c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h256c17.67 0 32 14.33 32 32v128c0 17.67-14.33 32-32 32H128zm272 112c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path></svg>
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
            name: 'ইতিহাস ও সংস্কৃতি',
            icon: <HistoryIcon style={{ fontSize: '32px', opacity: 0.8, marginTop: '2px' }} />
        },
        {
            name: 'দর্শনীয় স্থান',
            icon: <PlaceIcon style={{ fontSize: '32px', opacity: 0.8, marginTop: '2px' }} />
        },
        {
            name: 'খাবার',
            icon: <FoodIcon style={{ fontSize: '32px', opacity: 0.8, marginTop: '2px' }} />
        },
        {
            name: 'ভ্রমন গল্প',
            icon: <ArticleIcon style={{ fontSize: '32px', opacity: 0.8, marginTop: '2px' }} />
        }
    ]

    const renderTabMenu = (MenuItem) => {
        return menuItem.map((menu, i) => (
            <Button key={i} style={{ height: '85px', minWidth: '85px', borderRadius: '20px' }} className={styles.TabNavBtn} >
                {
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5px 0' }}>
                        <div style={{ minWidth: '32px' }}>{menu.icon}</div>
                        <span>{menu.name}</span>
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
