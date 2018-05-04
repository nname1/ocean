import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import {gotoStep3} from '../../reducer/action';
import { connect } from 'react-redux';
class Step4LeftButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const moveToStep3 = this.props.onClickFunction;
        return (
            <Button type="primary" onClick={moveToStep3}>
                Go back<Icon type="left"/>
            </Button>
        )
    }
}

export default Step4LeftButton;