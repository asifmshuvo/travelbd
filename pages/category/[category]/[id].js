import { useEffect } from "react";
import { useRouter } from "next/router";
import { ArticleBody } from 'components/article';

const Article = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return <ArticleBody />

};

export default Article;
