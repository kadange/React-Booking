import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuSelect} from '../action/MenuSelect';
import AppContent from './AppContent';
import {NavLink, Route} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class AppPage extends Component {

    reinitContent(params, activeMenu) {
        let content;
        switch(params.menu) {
            case "main":
                content = <AppContent activeMenu="MAIN_MENU" />
                break
            case "manage":
                content = <AppContent activeMenu="MANAGE_MENU" bookingNumber={params.bookingNumber}/>
                break
            case "search":
                content = <AppContent activeMenu="SEARCH_MENU" />
                break
            default:
                content = <AppContent activeMenu="MAIN_MENU" />
        }

        return content;
    }

    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
                        {/* <Menu.Item key="MAIN_MENU" onClick={() => this.props.menuSelect("MAIN_MENU")} ><NavLink to="/main">Main</NavLink></Menu.Item>
                        <Menu.Item key="MANAGE_MENU" onClick={() => this.props.menuSelect("MANAGE_MENU")} ><NavLink to="/manage">Manage</NavLink></Menu.Item>
                        <Menu.Item key="SEARCH_MENU" onClick={() => this.props.menuSelect("SEARCH_MENU")} ><NavLink to="/search">Search</NavLink></Menu.Item> */}

                        <Menu.Item key="MAIN_MENU" ><NavLink to="/main">Main</NavLink></Menu.Item>
                        <Menu.Item key="MANAGE_MENU" ><NavLink to="/manage">Manage</NavLink></Menu.Item>
                        <Menu.Item key="SEARCH_MENU" ><NavLink to="/search">Search</NavLink></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ margin: '45px 0 0 0', background: '#fff', padding: 24, minHeight: 280 }}>
                        <Route exact path="/" render={() => (
                            this.reinitContent("MAIN_MENU")
                        )}/>
                        <Route exact path="/:menu" render={({match}) => (
                            this.reinitContent(match.params, this.props.activeMenu)
                        )}/>
                        <Route exact path="/manage/shipmentNumber=:bookingNumber" render={({match}) => (
                            match.params = Object.assign({menu: 'manage'},match.params),
                            this.reinitContent(match.params, this.props.activeMenu)
                        )}/>
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