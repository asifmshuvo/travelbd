import { useRouter } from "next/router";
import Division from 'components/category/bangladesh/Division'

const DivisionPage = () => {
    const router = useRouter();
    const { category } = router.query;


    return <Division />
};

export default DivisionPage;