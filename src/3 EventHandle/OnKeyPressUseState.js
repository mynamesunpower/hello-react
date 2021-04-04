import React, { useState } from 'react';

const OnKeyPressUseState = () => {
	const [username, setUsername] = useState('unknown');
	const [message, setMessage] = useState('안녕하세요');
	const onChangeUsername = (e) => setUsername(e.target.value);
	const onChangeMessage = (e) => setMessage(e.target.value);
	const onClick = () => {
		alert(username + ': ' + message);
		setUsername('');
		setMessage('');
	};
	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type='text'
				name='username'
				placeholder='사용자명'
				value={username}
				onChange={onChangeUsername}
			/>
			<input
				type='text'
				name='message'
				placeholder='아무거나 입력해 보세요.'
				onChange={onChangeMessage}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default OnKeyPressUseState;
