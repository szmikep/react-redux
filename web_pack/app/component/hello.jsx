import React from "react";

class Hello extends React.Component{
    
    render(){
        this.print = this.print.bind(this);
        return <div className="hello" onClick={this.print}>
                  <h1>Hello, {this.props.name}</h1>
                </div>
    }

    print(){
        console.log("点击事件");
        console.log(this);
    }
}
module.exports = Hello;