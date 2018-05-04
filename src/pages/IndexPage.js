import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class HomePage extends Component {
    render() {
        return (
            <Layout>
                <Layout style={{ padding: '0 12px 12px' }}>
                    <Content style={{ background: '#fff', padding: 24, margin: 0 }}>
                        This is Index page
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default HomePage;