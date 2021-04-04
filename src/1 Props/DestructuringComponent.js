import React from 'react';

const DestructuringComponent = ({ name, children }) => {
	return (
		<div>
			안녕하세요, 제 이름은 {name}입니다. <br />
			children 값은 {children} 입니다.
		</div>
	);
};

DestructuringComponent.defaultProps = {
	name: '기본 이름',
};

export default DestructuringComponent;
