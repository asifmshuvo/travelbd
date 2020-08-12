import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from 'components/home';
import AppLayout from 'components/layout'

const Contnet = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return <AppLayout>
        <Home />
    </AppLayout>
};

export default Contnet;
