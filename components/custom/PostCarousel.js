import React, { useRef } from "react";
import Link from 'next/link'

import { Carousel, Typography, Space, Spin } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import { useQuery } from '@apollo/client';
import { GET_RECENT_POST } from 'pages/api/query/homePage';

import { Loader, errorMessage } from 'custom';
import dayjs from 'dayjs';

import styles from './PostCarousel.module.scss';


const { Title } = Typography

export const getCarouselData = () => {
    const { loading, error, data } = useQuery(GET_RECENT_POST, {
        variables: {
            first: 9,
            category_slug: 'travel_news_featured'
        }
    })
    if (loading) return (
        <div style={{ margin: '15px', minHeight: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Space size="middle">
                <Spin />
            </Space>
        </div>
    )
    if (error) {
        errorMessage(error)
        return null
    }
    console.log(data);
    return <PostCarousel postData={data?.posts} />
}

const PostCarousel = ({ postData }) => {
    console.log('Log: PostCarousel -> postData', postData)
    const carouselRef = useRef(null)


    const renderCarouselCard = (posts) => {
        return posts.map(item => getSingleCard(item)) || null
    }

    const getSingleCard = (article) => {
        const categoryIndex = article?.categories?.nodes?.length - 1
        const categoryName = article?.categories?.nodes[categoryIndex]?.name ?? ''
        const categorySlug = article?.categories?.nodes[categoryIndex]?.slug ?? ''

        const cardCoverImageUrl = article?.featuredImage?.node?.sourceUrl ?? ''
        // console.log('Log: PostCard -> cardCoverImageUrl', cardCoverImageUrl)
        const cardImageSource = cardCoverImageUrl.replace("https://tb.primex-bd.com/wp", "http://travelbd.xyz");

        return (
            <div className={styles.carouselItem}>
                <Link as={`/category/${(categorySlug || 'others')}/${(article?.id ?? '')}`} href="/category/[category]/[id]" >
                    <a href="post.html">
                        <img src={cardImageSource} alt="" />
                        <div className={styles.postInfo}>
                            <Link as={`/category/${categorySlug}`} href="/category/[category]" >
                                <span className={styles.categoryTitle}>{categoryName}</span>
                            </Link>
                            <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>{article?.title ?? ''}</Title>
                            <div className={styles.meta}>
                                <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                <span className={styles.postDate}>{`${(dayjs(article?.date).format('MMM-DD-YYYY'))}`}</span>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        )
    }

    const next = () => {
        carouselRef.current.next();
    }
    const previous = () => {
        carouselRef.current.prev();
    }

    const carouselProps = {
        dots: false,
        infinite: true,
        speed: 500,
        // className: "center",
        centerMode: true,
        // centerPadding: 10,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '42px',
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <LeftOutlined className={styles.sliderBtn} onClick={previous} />
            <div className={styles.carouselWrapper}>
                <Carousel ref={carouselRef} {...carouselProps} className={styles.carousel}>
                    {renderCarouselCard(postData?.nodes ?? [])}
                </Carousel>
            </div>
            <RightOutlined className={styles.sliderBtn} onClick={next} />
        </div>
    );
}