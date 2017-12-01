import React from "react";
import ReactDOM from "react-dom";

import {createStore} from "redux"; //导入createStore 

import {Number} from "./number.js";  
import reducers from "./reducers.js";    
const store = createStore(reducers); //生成store

const content = document.querySelector(".content");
const render = ()=> ReactDOM.render(
    <div>
        <Number
            value={store.getState()}
            addAttr={(action)=>store.dispatch(action)}  //传入一个函数，传入发送过来的action，由reducers处理之后返回state，
            lessAttr={(action)=>store.dispatch(action)}
        />
    </div>,
    content
);
render();
store.subscribe(render); //在reducers处理之后，返回了state，然后触发了render，更新视图