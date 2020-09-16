import React, { Component, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer, Button, Input } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';

import RightMenu from './RightMenu'
import { errorMessage } from 'custom';

const { Search } = Input;
const Navbar = () => {
    const router = useRouter()
    const [isSearch, setIsSearch] = useState(false);
    const [isDrawer, setIsDrawer] = useState(false)

    const showDrawer = () => {
        setIsDrawer(true)
    }
    const onClose = () => {
        setIsDrawer(false)
    };

    const onSearch = (searchStr) => {
        if (searchStr) router.push({
            pathname: '/search',
            query: { query: searchStr },
        })
    }
    return (
        <nav className="menuBar">
            <Link href='/' as='/'>
                <div className="logo">
                    <a >logo</a>
                </div>
            </Link>
            <div style={{ width: '100%', marginRight: '20px', float: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                {isSearch ?
                    <Search
                        placeholder="search article"
                        enterButton="Search"
                        size="large"
                        style={{ width: '100%' }}
                        onSearch={onSearch}
                        suffix={<CloseOutlined onClick={() => setIsSearch(false)} />}
                    />
                    : <Button icon={<SearchOutlined />} onClick={() => setIsSearch(true)}>Search</Button>}
            </div>
            <div className="menuCon">
                <div className="rightMenu">
                    <RightMenu />
                </div>
                <Button className="barsMenu" type="primary" onClick={showDrawer}>
                    <span className="barsBtn"></span>
                </Button>
                <Drawer
                    title="Logo"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={isDrawer}
                >
                    {/* <LeftMenu vertical /> */}
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    );
}

export default Navbar;