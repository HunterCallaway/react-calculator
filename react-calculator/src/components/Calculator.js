import React, {Fragment} from 'react';

class Calculator extends React.Component {

	render() {
		return (
			<Fragment>
				<h1>React Calculator</h1>
				<div id="calc-parent">

					<div className="row">
						<div className="column" id="calc-display-val">0</div>
					</div>

					<div className="row">
						<div className="calc-btn column" id="calc-clear">AC</div>
						<div className="calc-btn column" id="calc-backspace">&#8676;</div>
						<div className="calc-btn calc-btn-operator column" id="calc-divide">&#247;</div>
					</div>

					<div className="row">
						<div className="calc-btn calc-btn-num column" id="calc-seven">7</div>
						<div className="calc-btn calc-btn-num column" id="calc-eight">8</div>
						<div className="calc-btn calc-btn-num column" id="calc-nine">9</div>
						<div className="calc-btn calc-btn-operator column" id="calc-multiply">x</div>
					</div>

					<div className="row">
						<div className="calc-btn calc-btn-num column" id="calc-four">4</div>
						<div className="calc-btn calc-btn-num column" id="calc-five">5</div>
						<div className="calc-btn calc-btn-num column" id="calc-six">6</div>
						<div className="calc-btn calc-btn-operator column" id="calc-minus">-</div>
					</div>

					<div className="row">
						<div className="calc-btn calc-btn-num column" id="calc-one">1</div>
						<div className="calc-btn calc-btn-num column" id="calc-two">2</div>
						<div className="calc-btn calc-btn-num column" id="calc-three">3</div>
						<div className="calc-btn calc-btn-operator column" id="calc-plus">+</div>
					</div>

					<div className="row">
						<div className="calc-btn calc-btn-num column" id="calc-zero">0</div>
						<div className="calc-btn column" id="calc-decimal">.</div>
						<div className="calc-btn calc-btn-operator column" id="calc-equals">=</div>
					</div>

				</div>
				</Fragment>
		);
	}

}

export default Calculator;