import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import { PostCarousel, ShowMore, Articles } from 'components/custom';
import { TabNavigator } from 'components/home/TabNavigator';
import { errorMessage, Loader, Empty } from "custom";

export default function getRecentPosts() {
    const { loading, error, data } = useQuery(GET_RECENT_POST, {
        variables: {
            first: 9
        }
    })
    if (loading) return <Loader />
    if (error) return <Empty />
    if (data) {
        const posts = data?.posts?.nodes ?? []
        const endCursor = data?.posts?.pageInfo?.endCursor ?? ''
        return posts?.length <= 0 ? <Empty /> : <Home recPosts={posts} cursor={endCursor} />
    }
}

const Home = ({ recPosts, cursor }) => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState(recPosts)
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState(cursor)

    const fetchPost = () => {
        setLoading(true)
        getPost({ variables: { first: postLimit, after: endCursor, before: '' } })
    }

    const [getPost, { data }] = useLazyQuery(GET_RECENT_POST, {
        // fetchPolicy: 'network-only',
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
        <>
            <PostCarousel />
            <TabNavigator />

            <Articles articles={posts} />
            {loading ? <Loader /> : null}

            {posts.length > 0 ?
                <div onClick={() => { fetchPost() }} ><ShowMore /></div>
                : null
            }
        </>
    )
}
