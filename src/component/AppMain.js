import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuSelect} from '../action/MenuSelect';
import AppContent from './AppContent';

const { Header, Content, Footer } = Layout;

class AppPage extends Component {

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
                        <Menu.Item key="MAIN_MENU" onClick={() => this.props.menuSelect("MAIN_MENU")} >Main</Menu.Item>
                        <Menu.Item key="MANAGE_MENU" onClick={() => this.props.menuSelect("MANAGE_MENU")} >Manage</Menu.Item>
                        <Menu.Item key="SEARCH_MENU" onClick={() => this.props.menuSelect("SEARCH_MENU")} >Search</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ margin: '50px 0', background: '#fff', padding: 24, minHeight: 280 }}>
                        <AppContent activeMenu={this.props.activeMenu} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeMenu: state.activeMenu,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        menuSelect: bindActionCreators(menuSelect, dispatch)
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(AppPage);