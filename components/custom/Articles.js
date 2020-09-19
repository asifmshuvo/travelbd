import { Row, Col } from 'antd';
import { PostCard, VideoCard } from 'components/custom';


export const Articles = ({ articles, video }) => {

  const renderArticleCard = (articles) => {
    return articles.map((article, i) => video ? <VideoCard key={i} video={article} /> : <PostCard key={i} article={article} />)
  }

  return (
    <Row className="mt-4 mb-4">
      <Col span={20} offset={2} sm={{ span: 22, offset: 1 }} xl={{ span: 18, offset: 3 }}>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          {renderArticleCard(articles)}
        </Row>
      </Col>
    </Row>
  )
}
