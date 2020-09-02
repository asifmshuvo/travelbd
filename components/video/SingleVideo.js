import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Row, Col, Typography, Avatar, Divider } from 'antd';
import { FacebookFilled, TwitterCircleFilled, ShareAltOutlined } from '@ant-design/icons'

import { useQuery } from '@apollo/client';
import { GET_SINGLE_VIDEO } from 'pages/api/query/video';

import dayjs from 'dayjs';
import { Loader, Empty, errorMessage } from 'custom';

const VideoPlayer = dynamic(() => import('util/VideoReact'))
const MarkdownViewer = dynamic(() => import('util/MarkdownViewer'), { loading: () => <Loader /> })

import styles from 'components/article/ArticleBody.module.scss'


const { Title, Text } = Typography


export function getSingleVideo() {
    const router = useRouter()
    const { id } = router.query

    const { loading, error, data } = useQuery(GET_SINGLE_VIDEO, {
        variables: {
            id
        }
    })
    if (loading) return <Loader />
    if (error) {
        errorMessage(error)
        return <Empty />
    }
    console.log(data);
    return <SingleVideo videoData={data?.video} />
};


const SingleVideo = ({ videoData }) => {
    console.log('Log: SingleVideo -> videoData', videoData)
    const { title, date, videoInformation, content } = videoData
    const { videoUrl, featuredImage } = videoInformation
    console.log('Log: SingleVideo -> videoUrl', videoUrl)
    const { author } = featuredImage

    // const categoryIndex = categories?.nodes?.length - 1
    // const categoryName = categories?.nodes[categoryIndex]?.name ?? ''

    const headerImageUrl = featuredImage?.sourceUrl ?? ''
    // const headerImageSource = headerImageUrl.replace("https://tb.primex-bd.com/wp", "http://travelbd.xyz");

    return (

        <Row>
            <Col span={20} offset={2} xl={{ span: 18, offset: 3 }} className="mt-5 mb-5">
                <div className={styles.articleContainer}>
                    <Row>
                        <Col span={24} xl={11}>
                            <div className={styles.headerLeftWrapper}>
                                <div>
                                    {/* <Text>{categoryName}</Text> */}
                                    <Title className={styles.title}>{title}</Title>
                                </div>
                                <div>
                                    <div className={styles.authorContainer}>
                                        <Avatar size={44} className={styles.authorAvatar} src={author?.node?.avatar?.url ?? ''} />
                                        <div className={styles.authorMeta}>
                                            <span>{author?.node?.name ?? ''}</span>
                                            <span className={styles.date}>{`${(dayjs(date).format('MMM-DD-YYYY'))}`} <span className={styles.dot}>.</span></span>
                                        </div>
                                    </div>
                                    <div className={styles.socialLinkWrapper}>
                                        <FacebookFilled className={styles.socialLink} />
                                        <TwitterCircleFilled className={styles.socialLink} />
                                        <ShareAltOutlined className={styles.socialLink} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={24} xl={{ span: 12, offset: 1 }}>
                            <div className={styles.featureImageContainer}>
                                {/* <img className={styles.featureImage} src={headerImageUrl || ''} /> */}
                                <VideoPlayer poster={headerImageUrl} src={videoUrl} />
                            </div>
                        </Col>
                    </Row>
                    <Divider className={styles.divider} />
                    <Row>
                        <Col span={24} lg={{ span: 18, offset: 3 }}>
                            <div className={styles.markdownWrapper}>
                                <MarkdownViewer source={content} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>

    )
}



