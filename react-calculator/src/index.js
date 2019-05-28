import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
//import App from './App';
import Calculator from "./components/Calculator";
import {CalculatorCode} from "./components/CalculatorCode";
//import * as serviceWorker from './serviceWorker';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Calculator />
				<CalculatorCode />
			</header>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
