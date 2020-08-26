import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Typography, Row, Col } from 'antd';

import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_CATEGORY_DATA } from 'pages/api/query/categoryPage';

import { CategoryMenu } from './CategoryMenu';

import { ShowMore, Articles } from 'components/custom';
import { errorMessage, Loader, Empty } from "custom";

import styles from './CategoryHeader.module.scss';

const { Title, Text } = Typography

export default function getCategoryData({ slug }) {

    const { loading, error, data } = useQuery(GET_CATEGORY_DATA, {
        variables: {
            slug
        }
    })
    if (loading) return <Loader />
    if (error) return <CategoryHeader />
    if (data) {
        return <CategoryHeader headerData={data?.category} />
    }
}

const CategoryHeader = ({ headerData }) => {
    const { name, description, postCategoryFields } = headerData
    console.log('Log: CategoryHeader -> headerData', headerData)
    const { tagLine, catImage: image } = postCategoryFields
    console.log('Log: CategoryHeader -> tagline', tagLine)



    // useEffect(() => {
    //     setPosts(recPosts)
    //     setEndCursor(cursor)
    // }, [catgSlug])

    // const fetchPost = () => {
    //     setLoading(true)
    //     getPost({ variables: { first: postLimit, after: endCursor, before: '', category_slug: catgSlug } })
    // }

    // const [getPost, { data }] = useLazyQuery(GET_RECENT_POST, {
    //     onError: err => {
    //         errorMessage(err)
    //         setLoading(false)
    //     },
    //     onCompleted: data => {
    //         setPosts([...posts, ...data?.posts?.nodes])
    //         setEndCursor(data?.posts?.pageInfo?.endCursor ?? '')
    //         setLoading(false)
    //     },
    // })

    return (
        <div className={styles.headerContainer}>
            <Row className="mt-4 mb-4">
                <Col span={20} offset={2} md={{ span: 16, offset: 4 }}>
                    <center><Title>{name}</Title></center>
                    {/* <center><Text className={styles.subtitle}>{tagLine}</Text></center> */}
                    <div className={styles.descriptionWrapper}>
                        <Text>{description ? description?.slice(0, 350) + '...' ?? '' : ''} {description ? <a href="#">আরো দেখুন</a> : ''}</Text>
                    </div>
                </Col>
            </Row>
            <CategoryMenu />
        </div>
    )
}