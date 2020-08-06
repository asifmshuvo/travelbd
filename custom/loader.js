
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

export function Loader({ size }) {
    const antIcon = <LoadingOutlined spin />;

    return <div style={{ margin: '15px' }}>
        <center>
            <Spin size={size || 'large'} indicator={antIcon} />
        </center>
    </div>
}