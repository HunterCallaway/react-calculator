import React, { Fragment } from 'react';

export const CalculatorCode = () => {

	//const decimalBtn = document.getElementById('calc-decimal');
	//const clearBtn = document.getElementById('calc-clear');
	//const backspaceBtn = document.getElementById('calc-backspace');
	//const displayValElement = document.getElementById('calc-display-val');

	let displayVal = '0';
	let pendingVal;
	let evalStringArray = [];

	const calcNumBtns = document.getElementsByClassName('calc-btn-num');
	const calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');


	const updateDisplayVal = (clickObj) => {
		//Determine which button was clicked.
		let btnText = clickObj.target.innerText;
		const displayValElement = document.getElementById('calc-display-val');

		//Prevent the display element from displaying numbers preceded by '0'.
		if(displayVal === '0') {
			displayVal = '';
		}

		//Take the number buttons the user clicks and show them on the displayValElement.
		displayVal = displayVal + btnText;
		displayValElement.innerText = displayVal;
	};

	for(let i = 0; i < calcNumBtns.length; i++) {
		calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
	}


	const performOperation = (clickObj) => {
		//Determine which operator was clicked by the id.
		let operator = clickObj.target.id;
		let displayValElement = document.getElementById('calc-display-val');

		switch(operator) {

			case 'calc-plus':
				//Set the pendingVal equal to the displayVal.
				pendingVal = displayVal;
				//Set the displayVal equal to '0', i.e. the default value.
				displayVal = '0';
				//Update the displayVal.
				displayValElement.innerText = displayVal;
				//Push the pendingVal to the evalStringArray.
				evalStringArray.push(pendingVal);
				//Push the selected operator.
				evalStringArray.push('+');
				break;

			case 'calc-minus':
				//Set the pendingVal equal to the displayVal.
				pendingVal = displayVal;
				//Set the displayVal equal to '0', i.e. the default value.
				displayVal = '0';
				//Update the displayVal.
				displayValElement.innerText = displayVal;
				//Push the pendingVal to the evalStringArray.
				evalStringArray.push(pendingVal);
				//Push the selected operator.
				evalStringArray.push('-');
				break;

			case 'calc-multiply':
				//Set the pendingVal equal to the displayVal.
				pendingVal = displayVal;
				//Set the displayVal equal to '0', i.e. the default value.
				displayVal = '0';
				//Update the displayVal.
				displayValElement.innerText = displayVal;
				//Push the pendingVal to the evalStringArray.
				evalStringArray.push(pendingVal);
				//Push the selected operator.
				evalStringArray.push('*');
				break;

			case 'calc-divide':
				//Set the pendingVal equal to the displayVal.
				pendingVal = displayVal;
				//Set the displayVal equal to '0', i.e. the default value.
				displayVal = '0';
				//Update the displayVal.
				displayValElement.innerText = displayVal;
				//Push the pendingVal to the evalStringArray.
				evalStringArray.push(pendingVal);
				//Push the selected operator.
				evalStringArray.push('/');
				break;

			case 'calc-equals':
				//Push the final value to the evalStringArray.
				evalStringArray.push(displayVal);
				//Join the elements with an empty space between them.
				const evaluation = eval(evalStringArray.join(' '));
				//Update displayVal with the evaluation variable as if it were a string.
				displayVal = evaluation + '';
				//Update the HTML.
				displayValElement.innerText = displayVal;
				//Clear the evalStringArray.
				evalStringArray = [];
				break;

			default:
				break;

		}

	};

	for(let i = 0; i < calcOperatorBtns.length; i++) {
		calcOperatorBtns[i].addEventListener('click', performOperation, false);
	}

	const clearBtn = () => {
		let displayValElement = document.getElementById('calc-display-val');
		document.getElementById('calc-clear');
		displayVal = '0';
		pendingVal = undefined;
		evalStringArray = [];
		displayValElement.innerText = displayVal;
	};

	const backspaceBtn = () => {
		let displayValElement = document.getElementById('calc-display-val');
		document.getElementById('calc-backspace');
		let lengthOfDisplayVal = displayVal.length;
		//Take the highest-indexed element, and remove it.
		displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

		//Make sure '0' is displayed if all of the entered numbers have been deleted.
		if(displayVal === '') {
			displayVal = '0';
		}

		//Display the updated entry.
		displayValElement.innerText = displayVal;
	};

	const decimalBtn = () => {
		let displayValElement = document.getElementById('calc-display-val');
		document.getElementById('calc-decimal');
		//If the entry doesn't already include a decimal, add one when the user clicks the decimal button.
		if(!displayVal.includes('.')) {
			displayVal = displayVal + '.';
		}
		//Display the updated entry.
		displayValElement.innerText = displayVal;
	};

	return (
		<Fragment>
			<div id="calc-parent">

				<div className="row">
					<div className="column"
						  id="calc-display-val"
					>0</div>
				</div>

				<div className="row">
					<div className="calc-btn column"
						  id="calc-clear"
						  onClick={clearBtn}
					>AC</div>
					<div className="calc-btn column"
						  id="calc-backspace"
						  onClick={backspaceBtn}
					>&#8676;</div>
					<div className="calc-btn calc-btn-operator column"
						  id="calc-divide"
						  onClick={performOperation}
					>&#247;</div>
				</div>

				<div className="row">
					<div className="calc-btn calc-btn-num column"
						  id="calc-seven"
						  onClick={updateDisplayVal}
					>7</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-eight"
						  onClick={updateDisplayVal}
					>8</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-nine"
						  onClick={updateDisplayVal}
					>9</div>
					<div className="calc-btn calc-btn-operator column"
						  id="calc-multiply"
						  onClick={performOperation}
					>x</div>
				</div>

				<div className="row">
					<div className="calc-btn calc-btn-num column"
						  id="calc-four"
						  onClick={updateDisplayVal}
					>4</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-five"
						  onClick={updateDisplayVal}
					>5</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-six"
						  onClick={updateDisplayVal}
					>6</div>
					<div className="calc-btn calc-btn-operator column"
						  id="calc-minus"
						  onClick={performOperation}
					>-</div>
				</div>

				<div className="row">
					<div className="calc-btn calc-btn-num column"
						  id="calc-one"
						  onClick={updateDisplayVal}
					>1</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-two"
						  onClick={updateDisplayVal}
					>2</div>
					<div className="calc-btn calc-btn-num column"
						  id="calc-three"
						  onClick={updateDisplayVal}
					>3</div>
					<div className="calc-btn calc-btn-operator column"
						  id="calc-plus"
						  onClick={performOperation}
					>+</div>
				</div>

				<div className="row">
					<div className="calc-btn calc-btn-num column"
						  id="calc-zero"
						  onClick={updateDisplayVal}
					>0</div>
					<div className="calc-btn column"
						  id="calc-decimal"
						  onClick={decimalBtn}
					>.</div>
					<div className="calc-btn calc-btn-operator column"
						  id="calc-equals"
						  onClick={performOperation}
					>=</div>
				</div>

			</div>
		</Fragment>
	);
};

