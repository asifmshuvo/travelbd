import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from 'components/layout/header/Navbar'
import Layout from 'components/layout'

import { PostCarousel } from 'components/custom';

const Contnet = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return <div>
        <Layout>
            <PostCarousel />
        </Layout>
    </div>;
};

export default Contnet;
