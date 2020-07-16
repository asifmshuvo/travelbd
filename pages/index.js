import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from 'components/layout/header/Navbar'
import SiteFooter from 'components/layout/footer/SiteFooter'

const Contnet = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return <div>
        <NavBar />
        <SiteFooter />
    </div>;
};

export default Contnet;
