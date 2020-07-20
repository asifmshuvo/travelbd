import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from 'components/layout/header/Navbar'
import Layout from 'components/layout'
import { Row, Col } from 'antd';

import { PostCarousel, PostCard, ShowMore } from 'components/custom';
import { TabNavigator } from 'components/home/TabNavigator';

const Contnet = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return <div>
        <Layout>
            <PostCarousel />
            <TabNavigator />
            <Row className="mt-4 mb-4">
                <Col span={20} offset={2} md={{ span: 18, offset: 3 }}>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </Row>
                </Col>
            </Row>
            <ShowMore />

        </Layout>
    </div>;
};

export default Contnet;
