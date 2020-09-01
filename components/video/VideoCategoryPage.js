import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_VIDEOS, GET_RECENT_QVIDEOS } from 'pages/api/query/video';

import { ShowMore, Articles } from 'components/custom';
import { errorMessage, Loader, Empty } from "custom";

export function getRecentVideos({ slug }) {
    const router = useRouter();
    const { category } = router.query
    const catSlug = category || slug || ''
    let query;
    let videoFormat;

    if (catSlug) {
        switch (catSlug) {
            case 'video':
                query = GET_RECENT_VIDEOS;
                videoFormat = 'videos';
                break;
            case 'feature_video':
                query = GET_RECENT_QVIDEOS;
                videoFormat = 'qvideos';
                break;
            default:
                query = GET_RECENT_VIDEOS;
                videoFormat = 'videos';
                break;
        }

        const { loading, error, data } = useQuery(query, {
            variables: {
                first: 9,
            }
        })
        if (loading) return <Loader />
        if (error) return <Empty />
        if (data) {
            const videos = data?.[`${videoFormat}`]?.nodes ?? []
            console.log('Log: getRecentVideos -> videos', videos)
            const endCursor = data?.[`${videoFormat}`]?.pageInfo?.endCursor ?? ''
            return videos?.length <= 0 ? <Empty /> : <VideoPage recVideos={videos} cursor={endCursor} query={query} videoFormat={videoFormat} />
        }
    } else return null
}

const VideoPage = ({ recVideos, cursor, query, videoFormat }) => {
    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState([])
    const [queryLimit, setQueryLimit] = useState(9)
    const [endCursor, setEndCursor] = useState('')

    useEffect(() => {
        setVideos(recVideos)
        setEndCursor(cursor)
    }, [query])

    const fetchVideos = () => {
        setLoading(true)
        getVideos({ variables: { first: queryLimit, after: endCursor, } })
    }

    const [getVideos, { data }] = useLazyQuery(query, {
        onError: err => {
            errorMessage(err)
            setLoading(false)
        },
        onCompleted: data => {
            const videoF = videoFormat
            setVideos([...videos, ...data?.[`${videoF}`]?.nodes])
            setEndCursor(data?.[`${videoF}`]?.pageInfo?.endCursor ?? '')
            setLoading(false)
        },
    })

    return (
        <div>
            {/* <CategoryHeader slug={catgSlug} /> */}
            <Articles articles={videos} video />
            {loading ? <Loader /> : null}
            {videos.length > 0 ?
                <div onClick={() => { fetchVideos() }} ><ShowMore /></div>
                : null
            }
        </div>
    )
}