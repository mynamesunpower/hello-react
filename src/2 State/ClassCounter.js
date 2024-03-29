import React, { Component } from 'react';

class ClassCounter extends Component {
	// state의 초기값 설정
	state = {
		number: 0,
		fixedNumber: 0,
	};

	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>바뀌지 않는 값: {fixedNumber}</h2>
				<button
					// onClick을 통해 버튼이 클릭되었을 때 호출될 함수를 지정한다.
					onClick={() => {
						// this.setState를 통해 state에 새로운 값을 넣을 수 있다.
						this.setState((prevState) => {
							return {
								number: prevState.number + 1,
							};
						});

						this.setState((prevState) => ({
							number: prevState.number + 1,
						}));
					}}
				>
					+1
				</button>
			</div>
		);
	}
}

export default ClassCounter;
