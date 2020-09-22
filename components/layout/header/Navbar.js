import React, { Component, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Drawer, Button, Input } from 'antd';
import { SearchOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';

import RightMenu from './RightMenu'
import { errorMessage } from 'custom';

import DrawerMenu from './DrawerMenu';

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
                <div className="rightMenu" >
                    <RightMenu />
                </div>
                <Button className="barsMenu" icon={<MenuOutlined />} onClick={showDrawer}>
                    {/* <span className="barsBtn"></span> */}
                </Button>
                <Drawer
                    title={<img className="drawerLogo" src="/assets/logo/tbd_logo.png" />}
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    visible={isDrawer}
                >
                    {/* <LeftMenu vertical /> */}
                    <div className="mt-2">
                        <div className="mb-2" className="drawerlngbtn" style={{ display: 'flex', justifyContent: 'center' }}>
                            <RightMenu />
                        </div>
                        <DrawerMenu />
                    </div>
                </Drawer>
            </div>


            <style jsx>
                {`
                    .logo {
                        background: url(/assets/logo/tbd_logo.png);
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center;
                        height: 60px;
                        width: 180px;
                        margin: 2px 15px 2px 0;
                    }

                    @media (min-width:768px){
                        .logo {
                            height: 48px;
                            width: 144px;
                            min-width: 144px;
                            margin-left: calc(50% - 72px);
                        }
                        .drawerlngbtn {
                            display: none !important;
                        }
                    }

                    .menuBar{
                        min-height: 61px;
                    }

                    .drawerLogo{
                        height: 30px;
                        width: 90px;
                        object-fit: contain;
                    }
                `}
            </style>
        </nav>
    );
}

export default Navbar;