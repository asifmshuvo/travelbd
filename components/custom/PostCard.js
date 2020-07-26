import React from 'react'
import Link from 'next/link'

import { Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import styles from './PostCard.module.scss';
import dayjs from 'dayjs';

const { Meta } = Card;

export const PostCard = ({ article }) => {
  const categoryIndex = article?.categories?.nodes?.length - 1
  const categoryName = article?.categories?.nodes[categoryIndex]?.name ?? ''

  const cardCoverImageUrl = article?.featuredImage?.node?.sourceUrl ?? ''
  console.log('Log: PostCard -> cardCoverImageUrl', cardCoverImageUrl)
  const cardImageSource = cardCoverImageUrl.replace("https://tb.primex-bd.com/wp", "http://travelbd.xyz");
  console.log('Log: PostCard -> cardImageSource', cardImageSource)

  // const imageUrl = article.image.url.startsWith('/')
  //   ? process.env.API_URL + article.image.url
  //   : article.image.url

  return (
    <Link as={`/article/${(article?.id ?? '')}`} href="/article/[id]" >
      <Card
        hoverable
        style={{ width: 296, margin: '10px' }}
        bodyStyle={{ padding: '15px' }}
        cover={<img className={styles.cardImage} alt=" " src={cardImageSource} />}
      >
        <div className={styles.categoryContainer}>
          <span className={styles.category}>{categoryName}</span>
          <BookOutlined style={{ fontSize: '18px' }} />
        </div>
        <Meta
          title={<span className={styles.cardTitle}>{article?.title ?? ''}</span>}
          description={
            <div className={styles.descriptionWrapper}>
              <span className={styles.date}>{`${(dayjs(article?.date).format('MMM-DD-YYYY'))}`}</span>
              <span className={styles.dot}>.</span>
              {/* <span className={styles.readingCount}>33 বার পড়া হয়েছে</span> */}
            </div>
          }
        />
      </Card>
    </Link>
  )
}

