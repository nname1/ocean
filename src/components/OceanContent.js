import React, { Component } from 'react';
import { Layout } from 'antd';
import Flow from "./Flow";
const { Content } = Layout;
let items;
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

class OceanContent extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(<Content style={{ background: '#fff', padding: 24, margin: 0 }}>
            {

                getTypes(this.props.url).map((item,index)=>{
                    return firstUpperCase(item)+" " ;
                })
            }
            <Flow/>
        </Content>)
    }
}

export default OceanContent;