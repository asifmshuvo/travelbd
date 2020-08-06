import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import { ShowMore, Articles } from 'components/custom';
import { errorMessage, Loader } from "custom";

const CategoryPage = (params) => {
    const router = useRouter();
    const { category } = router.query
    console.log('Log: CategoryPage -> category', category)

    const [loading, setLoading] = useState(false)
    const [slug, setSlug] = useState('')
    const [posts, setPosts] = useState([])
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState("")

    useEffect(() => {
        console.log('Log: Home -> category', category)
        if (category) fetchPost()
    }, [category])

    const fetchPost = () => {
        setLoading(true)
        getPost({ variables: { first: postLimit, after: endCursor, before: '', category_slug: category } })
    }

    const [getPost, { data }] = useLazyQuery(GET_RECENT_POST, {
        onError: err => {
            errorMessage(err)
            setLoading(false)
        },
        onCompleted: data => {
            if (category === slug) setPosts([...posts, ...data?.posts?.nodes])
            else {
                setPosts(data?.posts?.nodes)
                setSlug(category)
            }

            setEndCursor(data?.posts?.pageInfo?.endCursor ?? '')
            setLoading(false)
        },
    })

    return (
        <div>
            <Articles articles={posts} />
            {loading ? <Loader /> : null}
            {posts.length > 0 ?
                <div onClick={() => { fetchPost() }} ><ShowMore /></div>
                : null
            }
        </div>
    )
}

export default CategoryPage;