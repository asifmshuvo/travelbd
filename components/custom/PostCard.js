import React from 'react'
import Link from 'next/link'

import { Card } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import styles from './PostCard.module.scss';

const { Meta } = Card;

export const PostCard = ({ article }) => {

  // const imageUrl = article.image.url.startsWith('/')
  //   ? process.env.API_URL + article.image.url
  //   : article.image.url

  return (
    <Link as={`/article/${"article.id"}`} href="/article/[id]" >
      <Card
        hoverable
        style={{ width: 296, margin: '10px' }}
        bodyStyle={{ padding: '15px' }}
        cover={<img style={{ height: '180px' }} alt="example" src="https://assets.roar.media/assets/iPWh9pXOoMtJaxJz_11-mag-Rohingya-03-superJumbo-(1).jpg?w=360" />}
      >
        <div className={styles.categoryContainer}>
          <span className={styles.category}>বিজ্ঞান</span>
          <BookOutlined style={{ fontSize: '18px' }} />
        </div>
        <Meta title={<span className={styles.cardTitle}>স্পাই স্টোরিজ: সত্যিকার স্পাইদের কাহিনী</span>} description={<div className={styles.descriptionWrapper}><span className={styles.date}>২২শে জানুয়ারী</span><span className={styles.dot}>.</span><span className={styles.readingCount}>33 বার পড়া হয়েছে</span></div>} />
      </Card>
    </Link>
  )
}

