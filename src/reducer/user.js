const util = require('util');
let userDefaultState = {loggedInUser:"noname"};
const user = (state = userDefaultState , action) => {
    console.log("user state is "+util.inspect(state,{depth:4}));
    switch(action.type){
        case "loggedIn":
            // state.loggedInUser=action.text;
            state = Object.assign({}, state, {
                loggedInUser: action.text
            })
            console.log("state is "+util.inspect(state,{depth:4}));
            return state;
        default:
            return state;
    }
}
export default user;