
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import { ShowMore, Articles } from 'components/custom';
import { errorMessage, Loader, Empty } from "custom";

export default function getRecentPosts() {
    const router = useRouter();
    const { query } = router.query

    const { loading, error, data } = useQuery(GET_RECENT_POST, {
        variables: {
            first: 9,
            search_string: query
        },
        skip: !query
    })
    if (loading) return <Loader />
    if (error) return <Empty />
    if (data) {
        const posts = data?.posts?.nodes ?? []
        const endCursor = data?.posts?.pageInfo?.endCursor ?? ''
        return posts?.length <= 0 ? <Empty /> : <SearchPage recPosts={posts} cursor={endCursor} searchStr={query} />
    }
    return null
}

function SearchPage({ recPosts, cursor, searchStr }) {
    console.log('Log: SearchPage -> searchStr', searchStr)
    // console.log('Log: CategoryPage -> catgSlug', searchStr)
    const [loading, setLoading] = useState(false)
    // const [slug, setSlug] = useState(catgSlug)
    const [posts, setPosts] = useState([])
    const [isShowMore, setIsShowMore] = useState(true)
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState('')
    // console.log('Log: SearchPage -> endCursor', endCursor)

    useEffect(() => {
        setPosts(recPosts)
        setEndCursor(cursor)
    }, [searchStr])

    const fetchPost = () => {
        setLoading(true)
        getPost({ variables: { first: postLimit, after: endCursor, search_string: searchStr } })
    }

    const [getPost, { data }] = useLazyQuery(GET_RECENT_POST, {
        onError: err => {
            errorMessage(err)
            setLoading(false)
        },
        onCompleted: data => {
            if (posts[0]?.id === data?.posts?.nodes[0]?.id) {
                setIsShowMore(false)
            } else {
                setPosts([...posts, ...data?.posts?.nodes])
                setEndCursor(data?.posts?.pageInfo?.endCursor ?? '')
            }
            setLoading(false)

        },
    })

    return (
        <div>
            <Articles articles={posts} />
            {loading ? <Loader /> : null}
            {(posts.length > 0) && isShowMore ?
                <div onClick={() => { fetchPost() }} ><ShowMore /></div>
                : null
            }
        </div>
    )

};