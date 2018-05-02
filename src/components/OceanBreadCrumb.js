import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

function firstUpperCase(str){
    return str.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}

function getTypes(url){
    var arr = url.split("/");
    arr = arr.filter((str,index)=>{if(str!="") return str});
    return arr;
}
class OceanBreadCrumb extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(<Breadcrumb style={{ margin: '16px 0' }}>
            {
                getTypes(this.props.path).map((item,index)=>{
                    return <Breadcrumb.Item>{firstUpperCase(item)}</Breadcrumb.Item>
                })
            }
        </Breadcrumb>)
    }
}

export default OceanBreadCrumb;