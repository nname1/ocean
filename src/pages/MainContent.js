import React, { Component } from 'react';
import BreadCrumb from '../components/OceanBreadCrumb';
import Content from '../components/OceanContent';
class DefaultContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BreadCrumb path={this.props.match.url}/>
                <Content url={this.props.match.url}/>
            </div>
        )
    }
}

export default DefaultContent;

