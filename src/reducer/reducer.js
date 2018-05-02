let defaultState = {

}
// 首页表单数据
export const formData = (state = defaultState , action = {}) => {
    switch(action.type){
        case "1":
            return {...state, ...defaultState};
        default:
            return state;
    }
}