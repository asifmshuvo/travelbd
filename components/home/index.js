import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery } from "@apollo/client";
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import NavBar from 'components/layout/header/Navbar'
import Layout from 'components/layout'

import { PostCarousel, ShowMore, Articles } from 'components/custom';
import { TabNavigator } from 'components/home/TabNavigator';
import { errorMessage, Loader } from "custom";

const Home = (params) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [postLimit, setPostLimit] = useState(9)
    const [endCursor, setEndCursor] = useState("")

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = () => {
        setLoading(true)
        getPost({ variables: { first: postLimit, after: endCursor, before: '' } })
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
        <Layout>
            <PostCarousel />
            <TabNavigator />

            <Articles articles={posts} />
            {loading ? <Loader /> : null}

            <div onClick={() => { fetchPost() }} ><ShowMore /></div>
        </Layout>
    )
}

export default Home;
