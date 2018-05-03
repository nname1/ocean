import { Steps, Icon } from 'antd';
import React, { Component } from 'react';
const Step = Steps.Step;

class Flow extends Component{

    render(){
        return(<Steps>
            <Step status="process" title="Login" />
            <Step status="wait" title="Verification"  />
            <Step status="wait" title="Pay"/>
            <Step status="wait" title="Done"/>
        </Steps>);
    }
}

export default Flow;