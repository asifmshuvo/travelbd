import { useRouter } from "next/router";
import CategoryPage from 'components/category';
import { VideoCategoryPage } from 'components/video';
import AllArticles from 'components/home/AllArticles';

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    if (category === 'video' || category === 'feature_video') {
        return <VideoCategoryPage />
    }
    if (category === 'recent') {
        return <AllArticles />
    }
    return <CategoryPage />
};

export default Category;