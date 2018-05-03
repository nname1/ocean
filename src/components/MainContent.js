import React, { Component } from 'react';
import BreadCrumb from './OceanBreadCrumb';
import Content from './OceanContent';
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

