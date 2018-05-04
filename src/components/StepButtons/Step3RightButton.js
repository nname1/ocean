import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {gotoStep4} from '../../reducer/action';
import { connect } from 'react-redux';
class Step3RightButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep4 = this.props.onClickFunction;
        return (
            <Button type="primary" onClick={moveToStep4}>
                Go forward<Icon type="right"/>
            </Button>
        )
    }
}

export default Step3RightButton;