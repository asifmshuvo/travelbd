import { useRouter } from "next/router";
import CategoryPage from 'components/category';
import { VideoCategoryPage } from 'components/video';

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    if (category === 'video' || category === 'feature_video') {
        return <VideoCategoryPage />
    }
    return <CategoryPage />
};

export default Category;