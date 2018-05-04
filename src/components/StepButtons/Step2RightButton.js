import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {gotoStep3} from '../../reducer/action';
import { connect } from 'react-redux';
class Step2RightButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep3 = this.props.onClickFunction;
        return (
            <Button type="primary" onClick={moveToStep3}>
                Go forward<Icon type="right"/>
            </Button>
        )
    }
}

export default Step2RightButton;