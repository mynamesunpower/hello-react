import React, { Component } from 'react';

class InputSeveral extends Component {
	state = {
		username: '',
		message: '',
	};

	// 객체 안에서 key를 []로 감싸면, 그 안에 넣는 레퍼런스가 가리키는 실제 값이 key값으로 사용됨.
	// const name = 'variantKey';
	// const object = {
	//  [name]: 'value'
	// }
	// 결과 -----> { 'variantKey' : 'value'}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.username + ': ' + this.state.message);
		this.setState({
			username: '',
			message: '',
		});
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type='text'
					name='username'
					placeholder='사용자명'
					value={this.state.username}
					onChange={this.handleChange}
				/>
				<input
					type='text'
					name='message'
					placeholder='아무거나 입력해 보세요'
					value={this.state.message}
					onChange={this.handleChange}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}

export default InputSeveral;
