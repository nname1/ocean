import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {gotoStep2} from '../../reducer/action';
import { connect } from 'react-redux';
class Step3LeftButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep2 = this.props.onClickFunction;
        return (
            <Button type="primary" onClick={moveToStep2}>
                Go back<Icon type="left"/>
            </Button>
        )
    }
}

export default Step3LeftButton;