import React from "react";
import ReactDOM from "react-dom";
import {InitReducers} from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Number from "./number";
const store = createStore(InitReducers);
const content = document.querySelector(".content");

ReactDOM.render(
	<Provider store={store}>
		<Number />
	</Provider>,
	content
);