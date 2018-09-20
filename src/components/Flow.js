import React, {Component} from 'react';
import OceanSteps from "./OceanSteps";
import StepContent from "./StepConent";
import * as action from '../reducer/action';
import { connect } from 'react-redux';
const util = require('util');
function mapStateToProps(state) {
    console.log("Flow state is "+util.inspect(state,{depth:4}));
    return ({
        statuses:{
            step1Status:state.changeStep.step1Status,
            step2Status:state.changeStep.step2Status,
            step3Status:state.changeStep.step3Status,
            step4Status:state.changeStep.step4Status
        }
    })
}

function mapDispatchToProps(dispatch,ownProps) {
    return ({
        actions:{
            moveToStep1:()=>dispatch(action.gotoStep1),
            moveToStep2:()=>dispatch(action.gotoStep2),
            moveToStep3:()=>dispatch(action.gotoStep3),
            moveToStep4:()=>dispatch(action.gotoStep4)
        }
    })
}
class Flow extends Component {

    render() {
        return (<div><OceanSteps statuses={this.props.statuses}/><br/><StepContent status={this.props.statuses} actions={this.props.actions}/></div>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flow);