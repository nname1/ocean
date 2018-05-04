import React, {Component} from 'react';
import {Button, Icon} from 'antd';

class Step1RightButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep2 = this.props.onClickFunction;
        return (<Button type="primary" onClick={moveToStep2}>
                Go forward<Icon type="right"/>
            </Button>)
    }
}

export default Step1RightButton;