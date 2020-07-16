import { Layout } from 'antd';
import Navbar from './header/Navbar';
import SiteFooter from './footer/SiteFooter';

const { Content } = Layout;

export default ({ children, slug }) => {
    return (
        <Layout className="layout" style={{ height: '100vh' }}>
            <Navbar slug={slug} />
            <Content style={{ height: '100%' }} className="site-bg">
                {children}
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
                `}
            </style>
        </Layout>
    )
}
