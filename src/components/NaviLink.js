/**
 * Created by lonwang on 2018/1/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NaviLink extends Component{
    render() {
        return <Link {...this.props} className="fontColor"/>
    }
}
export default NaviLink;