import React, {Component} from 'react';
import {Steps} from 'antd';
const Step = Steps.Step;


class OceanSteps extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {step1Status,step2Status,step3Status,step4Status}=this.props.statuses;
        console.log(this.props);
        return (<Steps>
            <Step status={step1Status} title="Step1"/>
            <Step status={step2Status} title="Step2"/>
            <Step status={step3Status} title="Step3"/>
            <Step status={step4Status} title="Step4"/>
        </Steps>);
    }
}

export default OceanSteps;
