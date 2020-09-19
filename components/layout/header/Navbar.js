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
            {!isSearch ?
                <Link href='/' as='/'>
                    <a className="logo">
                        {/* <div className="logo"></div> */}
                    </a>
                </Link>
                : null}

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


            <style jsx>
                {`
                    .logo {
                        background: url(/assets/logo/tbd_logo.png);
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center;
                        height: 50px;
                        width: 150px;
                        margin: 5px 15px 5px 0;
                    }
                    .menuBar{
                        min-height: 61px;
                    }
                `}
            </style>
        </nav>
    );
}

export default Navbar;