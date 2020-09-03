import { useRouter } from 'next/router';
import { Layout } from 'antd';
import Navbar from './header/Navbar';
import SiteFooter from './footer/SiteFooter';
import { TabNavigator } from './nav-components';

const { Content } = Layout;

export default ({ children }) => {
    const { category } = useRouter().query
    // console.log('Log: slug', category)

    return (
        <Layout className="layout" style={{ minHeight: '100vh', background: '#fff' }}>
            <Navbar />
            <Content style={{ height: '100%', minHeight: 'calc(100vh - 52px)' }} className="site-bg">
                {children}

                {category ?
                    <div className='tabNavigator' style={{ margin: '0', position: 'sticky', bottom: '0', top: 'calc(100vh - 65px)' }}>
                        <TabNavigator />
                    </div>
                    : null}
            </Content>
            <SiteFooter />

            <style jsx>
                {`
                .site-layout-content {
                    background: #fff;
                    padding: 24px;
                  }
                .logo {
                    width: 120px;
                    height: 31px;
                    background: rgba(255, 255, 255, 0.2);
                    margin: 16px 24px 16px 0;
                    float: left;
                  }
                  @media (min-width: 768px) {
                      .tabNavigator {
                            display: none;
                        }
                    }
                `}
            </style>
        </Layout >
    )
}
