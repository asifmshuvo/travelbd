
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

export function Loader({ size }) {
    const antIcon = <LoadingOutlined spin />;

    return <div style={{ margin: '10px' }}>
        <center>
            <Spin size={size || 'medium'} indicator={antIcon} />
        </center>
    </div>
}