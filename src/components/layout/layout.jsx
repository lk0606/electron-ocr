
import './layout.less'
import React from 'react'
import { Layout as CLayout, Menu, Switch, Avatar, Badge, Dropdown, Alert } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import { Aside } from './aside'
import SelfUpload from '../upload'

const { Header, Sider, Content } = CLayout

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props, 'props Layout')
    }

    state = {
        collapsed: false,
        theme: 'dark',
        current: '1',
        dom: null,
        input: '',
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    componentDidMount() {
    }

    render() {

        return (
            <CLayout className="layout-container">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                    </div>
                    <Aside
                        theme={this.state.theme}
                        children={this.props.children}/>
                </Sider>
                <CLayout className="site-layout">
                    <Header className="header-wrap" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,{
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <div>
                            <SelfUpload/>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                    </Content>
                </CLayout>
            </CLayout>
        );
    }
}
