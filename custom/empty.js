import { Empty } from 'antd'

export function emptyPage({ description }) {
    return (
        <Empty
            style={{ paddingTop: '100px' }}
            description={description || 'No Data'}
        >
        </Empty>
    )
}
