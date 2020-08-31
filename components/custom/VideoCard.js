import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


import { Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import styles from './PostCard.module.scss';
import dayjs from 'dayjs';
import capitalize from 'capitalize';
import { globalStrReplace } from 'util/functions';

const { Meta } = Card;

export const VideoCard = ({ video }) => {

    const router = useRouter();
    const { category } = router.query;


    // const categoryIndex = video?.categories?.nodes?.length - 1
    // const categoryName = video?.categories?.nodes[categoryIndex]?.name ?? ''
    // const categorySlug = video?.categories?.nodes[categoryIndex]?.slug ?? ''

    const cardCoverImageUrl = video?.videoInformation?.featuredImage?.sourceUrl ?? ''
    const cardCoverImageAltrText = video?.videoInformation?.featuredImage?.altText ?? ''
    // console.log('Log: PostCard -> cardCoverImageUrl', cardCoverImageUrl)
    // const cardImageSource = cardCoverImageUrl.replace("https://tb.primex-bd.com/wp", "http://travelbd.xyz");
    // console.log('Log: PostCard -> cardImageSource', cardImageSource)

    // const imageUrl = article.image.url.startsWith('/')
    //   ? process.env.API_URL + article.image.url
    //   : article.image.url

    return (
        <Link as={`/category/${(category || 'video')}/${(video?.id ?? '')}`} href="/category/[category]/[id]" >
            <Card
                hoverable
                style={{ width: 296, margin: '10px' }}
                bodyStyle={{ padding: '15px' }}
                cover={<img className={styles.cardImage} alt={cardCoverImageAltrText} src={cardCoverImageUrl} />}
            >
                <div className={styles.categoryContainer}>
                    {(!category && !id) ?
                        <Link as={`/category/${category}`} href="/category/[category]" >
                            <span className={styles.category}>{capitalize(globalStrReplace(category, '_', ' ') || '')}</span>
                        </Link>
                        :
                        <span className={styles.category}>{capitalize(globalStrReplace(category, '_', ' ') || '')}</span>
                    }
                    {/* <BookOutlined style={{ fontSize: '18px' }} /> */}
                    <img src="/assets/logo/bookmark.svg" alt="🖤" />
                </div>

                <Meta
                    title={<span className={styles.cardTitle}>{video?.title ?? ''}</span>}
                    description={
                        <div className={styles.descriptionWrapper}>
                            <span className={styles.date}>{`${(dayjs(video?.date).format('MMM-DD-YYYY'))}`}</span>
                            {/* <span className={styles.dot}>.</span> */}
                            {/* <span className={styles.readingCount}>33 বার পড়া হয়েছে</span> */}
                        </div>
                    }
                />
            </Card>
        </Link>
    )
}

