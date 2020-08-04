import React, { useRef } from "react";
import { Carousel, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from './PostCarousel.module.scss';


const { Title } = Typography

export const PostCarousel = (params) => {
    const carouselRef = useRef(null)


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
                    centerPadding: '40px',
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

                    <div className={styles.carouselItem}>
                        <a href="post.html">
                            <img src="https://assets.roar.media/assets/3giTWL40a4duumT7_images-(7).jpeg?w=360" alt="" />
                            <div className={styles.postInfo}>
                                <span className={styles.categoryTitle}>বিজ্ঞান</span>
                                <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>প্যারালাল ইউনিভার্স ও মাল্টিভার্স: তত্ত্ব নাকি বাস্তব</Title>
                                <div className={styles.meta}>
                                    <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                    <span className={styles.postDate}>২২ জুলাই ২০২০</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a href="post.html">
                            <img src="https://assets.roar.media/assets/3giTWL40a4duumT7_images-(7).jpeg?w=360" alt="" />
                            <div className={styles.postInfo}>
                                <span className={styles.categoryTitle}>বিজ্ঞান</span>
                                <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>প্যারালাল ইউনিভার্স ও মাল্টিভার্স: তত্ত্ব নাকি বাস্তব</Title>
                                <div className={styles.meta}>
                                    <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                    <span className={styles.postDate}>২২ জুলাই ২০২০</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a href="post.html">
                            <img src="https://assets.roar.media/assets/3giTWL40a4duumT7_images-(7).jpeg?w=360" alt="" />
                            <div className={styles.postInfo}>
                                <span className={styles.categoryTitle}>বিজ্ঞান</span>
                                <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>প্যারালাল ইউনিভার্স ও মাল্টিভার্স: তত্ত্ব নাকি বাস্তব</Title>
                                <div className={styles.meta}>
                                    <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                    <span className={styles.postDate}>২২ জুলাই ২০২০</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a href="post.html">
                            <img src="https://assets.roar.media/assets/3giTWL40a4duumT7_images-(7).jpeg?w=360" alt="" />
                            <div className={styles.postInfo}>
                                <span className={styles.categoryTitle}>বিজ্ঞান</span>
                                <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>প্যারালাল ইউনিভার্স ও মাল্টিভার্স: তত্ত্ব নাকি বাস্তব</Title>
                                <div className={styles.meta}>
                                    <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                    <span className={styles.postDate}>২২ জুলাই ২০২০</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={styles.carouselItem}>
                        <a href="post.html">
                            <img src="https://assets.roar.media/assets/3giTWL40a4duumT7_images-(7).jpeg?w=360" alt="" />
                            <div className={styles.postInfo}>
                                <span className={styles.categoryTitle}>বিজ্ঞান</span>
                                <Title ellipsis={{ rows: 2 }} level={4} className={styles.carouselTitle}>প্যারালাল ইউনিভার্স ও মাল্টিভার্স: তত্ত্ব নাকি বাস্তব</Title>
                                <div className={styles.meta}>
                                    <img className={styles.bookmarkIcon} src="/assets/logo/carousel_bookmark.svg" alt="🖤" />
                                    <span className={styles.postDate}>২২ জুলাই ২০২০</span>
                                </div>
                            </div>
                        </a>
                    </div>


                </Carousel>
            </div>
            <RightOutlined className={styles.sliderBtn} onClick={next} />
        </div>
    );
}