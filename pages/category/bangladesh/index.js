import { useRouter } from "next/router";
import Bangladesh  from 'components/category/bangladesh'

const CountryPage = () => {
    const router = useRouter();
    const { category } = router.query;


    return <Bangladesh />
};

export default CountryPage;