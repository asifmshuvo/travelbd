import { useState, useEffect } from "react";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import { ShowMore, Articles } from 'components/custom';
import { VideoCategoryPage } from 'components/video';
import CategoryPage from 'components/category';
import { errorMessage, Loader, Empty } from "custom";


export default function getRecentPosts({ tabMenu }) {
    const { loading, error, data } = useQuery(GET_RECENT_POST, {
        variables: {
            first: 9,
            category_slug: tabMenu,
            categoryNotIn: tabMenu !== 'video' ? [7531] : undefined
        }
    })
    if (loading) return <Loader />
    if (error) return <Empty />
    if (data) {
        const posts = data?.posts?.nodes ?? []
        const endCursor = data?.posts?.pageInfo?.endCursor ?? ''
        return posts?.length <= 0 ? <Empty /> : <AllArticles recPosts={posts} cursor={endCursor} tabMenu={tabMenu} />
    }
}

const AllArticles = ({ recPosts, cursor, tabMenu }) => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState(recPosts)
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState(cursor)

    useEffect(() => {
        if (recPosts) {
            setPosts(recPosts)
            setEndCursor(cursor)
        }
    }, [recPosts])

    const fetchPost = () => {
        setLoading(true)
        getPost({
            variables:
            {
                first: postLimit,
                after: endCursor,
                category_slug: tabMenu,
                categoryNotIn: tabMenu !== 'video' ? [7531] : undefined
            }
        })
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
            <div style={{ minHeight: '428px' }}>
                {/* {tabMenu === 'video' ? <VideoCategoryPage slug={'video'} /> : null} */}
                <div>
                    <Articles articles={posts} />
                    {loading ? <Loader /> : null}

                    {posts.length > 0 ?
                        <div onClick={() => { fetchPost() }} ><ShowMore /></div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}
