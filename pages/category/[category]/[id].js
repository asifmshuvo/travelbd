import { useRouter } from "next/router";
import { ArticleBody } from 'components/article';
import { SingleVideo } from 'components/video';

const Article = () => {
    const router = useRouter();
    const { category } = router.query;
    console.log('Log: Article -> category', category)

    if (category === 'video' || category === 'feature_video') {
        return <SingleVideo />
    } else {
        return <ArticleBody />
    }
};

export default Article;
