import { Row } from 'antd';

export const ShowMore = (props) => {
    return (
        <Row>
            <div className="show-more-wrapper">
                <span>Show More</span>
            </div>
            <style jsx>
                {`
                margin: 40px auto;
                color: rgb(174, 174, 178);
                font-size: 22px;
                line-height: 28px;
                font-family: inherit;
                cursor: pointer;
                `}
            </style>
        </Row>
    );
}