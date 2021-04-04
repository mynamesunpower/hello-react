import React, { useState } from 'react';
import Counter from './Counter';
import UseEffect from './useEffect';

const App = () => {
	const [visible, setVisible] = useState(false);
	return (
		<div>
			<button
				onClick={() => {
					setVisible(!visible);
				}}
			>
				{visible ? '숨기기' : '보이기'}
			</button>
			<hr />
			{visible && <UseEffect />}
		</div>
	);
};

export default App;
