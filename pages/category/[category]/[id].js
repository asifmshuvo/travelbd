import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from 'components/layout'
import { ArticleBody } from 'components/article';

const Article = () => {
    const router = useRouter();

    // useEffect(() => {
    //     router.push("/user-content/manage");
    // }, []);

    return (
        <Layout>
            <ArticleBody />
        </Layout>
    )
};

export default Article;
