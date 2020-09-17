import { useRouter } from "next/router";
import CategoryPage from 'components/category';
import { VideoCategoryPage } from 'components/video';
import AllArticles from 'components/home/AllArticles';
import Bangladesh from 'components/category/bangladesh'

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    // if (category === 'video') {
    //     return <VideoCategoryPage />
    // }
    // if (category === 'recent') {
    //     return <AllArticles />
    // }
    if (category === 'bangladesh') {
        return <Bangladesh />
    }
    return <CategoryPage />
};

export default Category;