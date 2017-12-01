import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "./actions";

const propTypes = {
	actions:React.PropTypes.object.isRequired,
	number:React.PropTypes.number.isRequired
}
class Number extends Component{
	setNumber(event){
		let {target} = event;
		let	type = target.getAttribute("data-type");
		if(type != "value"){
			this.props.actions.setAction(type);
		}else{
			this.props.actions.setAction(type,target.value);
		}
	}
	render(){
		let props = this.props,
		setNumber = this.setNumber.bind(this);
		return <div>
					<input type="text" onChange={setNumber} data-type="value" value={props.number}/>
					<button data-type="add" onClick={setNumber}>+</button>
					<button data-type="less" onClick={setNumber}>-</button>
				</div>
	}
}
Number.propTypes = propTypes;
//定义组件内需要使用的state某个值
function mapStateToProps(state){
	return {
		number:state.number
	}
}
//定义组件内需要调用回调改变state的props参数
function mapDispatchToProps(dispatch){
	return {
		//这就是合并actions.js中定义的函数，在组件内this.props.actions.xxx调用bindActionCreators生成的dispatch函数
		actions:bindActionCreators(Actions,dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Number);
