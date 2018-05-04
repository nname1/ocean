import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {gotoStep1} from '../../reducer/action';
import { connect } from 'react-redux';
class Step2LeftButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep1 = this.props.onClickFunction;
        return (
            <Button type="primary" onClick={moveToStep1}>
                Go back<Icon type="left"/>
            </Button>
        )
    }
}

export default Step2LeftButton;