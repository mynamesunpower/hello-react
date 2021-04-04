import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
	console.log('평균값 계산 중..');
	if (numbers.length === 0) return 0;
	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');

	// useCallback(생성하고자 하는 함수, 배열)
	// 빈 배열 []을 넣으면, 최초 렌더링 시에만 함수가 생성되어 계속 재사용함.
	// [number, list]는 number 혹은 list가 바뀌었을 때만 함수를 생성한다.
	// 함수 내부에서 상태값을 의존할 때는 그 값을 반드시 두 번째 파라미터에 포함시켜야 한다.
	const onChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성
	const onInsert = useCallback(() => {
		const nextList = list.concat(parseInt(number));
		setList(nextList);
		setNumber('');
	}, [number, list]); // nubmer 혹은 list가 바뀌었을 때만 함수 생성

	const avg = useMemo(() => getAverage(list), [list]);

	return (
		<div>
			<input value={number} onChange={onChange} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				<b>평균값: </b> {avg}
			</div>
		</div>
	);
};

export default Average;
