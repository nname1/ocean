import * as step from './actionType';

let defaultState = {step1Status:"process",step2Status:"wait",step3Status:"wait",step4Status:"wait"};
// 首页表单数据
export const changeStep = (state = defaultState , action) => {
    switch(action.type){
        case step.STEP1:
            return defaultState;
        case step.STEP2:
            return {step1Status:"finish",step2Status:"process",step3Status:"wait",step4Status:"wait"};
        case step.STEP3:
            return {step1Status:"finish",step2Status:"finish",step3Status:"process",step4Status:"wait"};
        case step.STEP4:
            return {step1Status:"finish",step2Status:"finish",step3Status:"finish",step4Status:"process"};
        default:
            return state;
    }
}