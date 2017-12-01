import * as Actions from "./actions"; 
const ReducersActions = {
	[Actions.NUMBER_ADD]:(state,action)=>{
		state.number++;
		return state;
	},
	[Actions.NUMBER_LESS]:(state,action)=>{
		state.number--;
		return state;
	},
	[Actions.NUMBER_VALUE]:(state,action)=>{
		state.number = action.value;
		return state;
	}

}
function InitReducers(state={},action){
	state.number == undefined?state.number=0:state.number;
	if(action.type === "@@redux/INIT"){
		return state;
	}
	state = ReducersActions[action.type](state,action);
	return Object.assign({},state);
}
export {InitReducers}