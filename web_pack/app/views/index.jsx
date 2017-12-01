import React from 'react';
import Hello from "../component/hello.jsx";

class Index extends React.Component{
    render(){
        return <div className="index_container" >
                  <Hello name="Mike"/>
                </div>
    }
}

module.exports = Index;