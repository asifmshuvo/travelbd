import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
class Navbar extends Component {
    state = {
        current: 'mail',
        visible: false
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <nav className="menuBar">
                <div className="logo">
                    <a href="">logo</a>
                </div>
                <div className="menuCon" style={{ width: '100%' }}>
                    <div className="leftMenu">
                        <LeftMenu />
                    </div>
                    <div className="rightMenu">
                        <RightMenu />
                    </div>
                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                        <span className="barsBtn"></span>
                    </Button>
                    <Drawer
                        title="Logo"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <LeftMenu vertical />
                        <RightMenu />
                    </Drawer>
                </div>
            </nav>
        );
    }
}
export default Navbar;