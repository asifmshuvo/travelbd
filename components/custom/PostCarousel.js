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
                                <div>
                                    <svg className={styles.svgIcon} width="25" height="25" viewbox="0 0 25 25">
                                        <path
                                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
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
                                <div>
                                    <svg className={styles.svgIcon} width="25" height="25" viewbox="0 0 25 25">
                                        <path
                                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
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
                                <div>
                                    <svg className={styles.svgIcon} width="25" height="25" viewbox="0 0 25 25">
                                        <path
                                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
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
                                <div>
                                    <svg className={styles.svgIcon} width="25" height="25" viewbox="0 0 25 25">
                                        <path
                                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
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
                                <div>
                                    <svg className={styles.svgIcon} width="25" height="25" viewbox="0 0 25 25">
                                        <path
                                            d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
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