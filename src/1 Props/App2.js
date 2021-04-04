import React from 'react';
import ChildrenComponent from './ChildrenComponent';
import DestructuringComponent from './DestructuringComponent';
import PropTypesComponent from './PropTypesComponent';
import IsRequiredComponent from './IsRequiredComponent';
import ClassPropsComponent from './ClassPropsComponent';
const App = () => {
	return (
		<>
			<ChildrenComponent>ChildrenComponent</ChildrenComponent>
			<br />
			<DestructuringComponent name='몰라용'>
				비구조화 할당 문법 -> 리액토
			</DestructuringComponent>
			<br />
			<PropTypesComponent name='react'>
				propTypes 컴포넌트
			</PropTypesComponent>
			<br />
			<IsRequiredComponent favoriteNumber={3}>
				isRequiredComponent에요
			</IsRequiredComponent>
			<br />
			<ClassPropsComponent favoriteNumber={5}>
				classPropsComponent에요
			</ClassPropsComponent>
		</>
	);
};

export default App;
