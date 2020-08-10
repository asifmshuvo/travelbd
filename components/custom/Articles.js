import { Row, Col } from 'antd';
import { PostCard } from 'components/custom';


export const Articles = ({ articles }) => {

  const renderArticleCard = (articles) => {
    return articles.map((article, i) => <PostCard key={i} article={article} />)
  }

  return (
    <Row className="mt-4 mb-4">
      <Col span={20} offset={2} md={{ span: 18, offset: 3 }}>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          {renderArticleCard(articles)}
        </Row>
      </Col>
    </Row>
  )
}
