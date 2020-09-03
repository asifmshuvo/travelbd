import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import CategoryHeader from './CategoryHeader';
import { ShowMore, Articles } from 'components/custom';
import { TabNavigator } from 'components/layout/nav-components/TabNavigator';
import { errorMessage, Loader, Empty } from "custom";

export default function getRecentPosts() {
    const router = useRouter();
    const { category } = router.query
    console.log('Log: getRecentPosts -> category', category)

    const { loading, error, data } = useQuery(GET_RECENT_POST, {
        variables: {
            first: 9,
            category_slug: category
        }
    })
    if (loading) return <Loader />
    if (error) return <Empty />
    if (data) {
        const posts = data?.posts?.nodes ?? []
        const endCursor = data?.posts?.pageInfo?.endCursor ?? ''
        return posts?.length <= 0 ? <Empty /> : <CategoryPage recPosts={posts} cursor={endCursor} catgSlug={category} />
    }
}

const CategoryPage = ({ recPosts, cursor, catgSlug }) => {
    console.log('Log: CategoryPage -> catgSlug', catgSlug)
    const [loading, setLoading] = useState(false)
    // const [slug, setSlug] = useState(catgSlug)
    const [posts, setPosts] = useState([])
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState('')

    useEffect(() => {
        setPosts(recPosts)
        setEndCursor(cursor)
    }, [catgSlug])

    const fetchPost = () => {
        setLoading(true)
        getPost({ variables: { first: postLimit, after: endCursor, before: '', category_slug: catgSlug } })
    }

    const [getPost, { data }] = useLazyQuery(GET_RECENT_POST, {
        onError: err => {
            errorMessage(err)
            setLoading(false)
        },
        onCompleted: data => {
            setPosts([...posts, ...data?.posts?.nodes])
            setEndCursor(data?.posts?.pageInfo?.endCursor ?? '')
            setLoading(false)
        },
    })

    return (
        <div>
            <CategoryHeader slug={catgSlug} />
            {/* <TabNavigator /> */}
            <Articles articles={posts} />
            {loading ? <Loader /> : null}
            {posts.length > 0 ?
                <div onClick={() => { fetchPost() }} ><ShowMore /></div>
                : null
            }
        </div>
    )
}