import React from 'react';

function App() {
	const name = '리액토';
	return (
		<div>
			{name === '리액트' ? (
				<h1>리액트입니다</h1>
			) : (
				<h1>리액트가 아닙니다.</h1>
			)}
		</div>
	);
}

export default App;
