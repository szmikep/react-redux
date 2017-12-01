import React,{Component} from "react";

const propTypes = {
    add:React.PropTypes.func.isRequired,
    less:React.PropTypes.func.isRequired,
    value:React.PropTypes.object.isRequired
}
class Number extends Component{
    addNum(){
        this.props.addAttr({type:"NUMBER_ADD"}) //调用app.js中传过来的箭头函数，传入了type为NUMBER_ADD的action
    }
    lessNum(){
        this.props.lessAttr({type:"NUMBER_LESS"})
    }
    render(){
        return <div>
                    <input type="text" value={this.props.value.number}/>
                    <button onClick={this.addNum.bind(this)}>
                        +
                    </button>
                    <button onClick={this.lessNum.bind(this)}>
                    -
                    </button>
                </div>
    }
}
Number.propTypes = propTypes;
export {Number};