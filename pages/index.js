import { useEffect } from "react";
import { useRouter } from "next/router";
import Home from 'components/home';

const Contnet = () => {
    const router = useRouter();

    return <Home />
};

export default Contnet;
