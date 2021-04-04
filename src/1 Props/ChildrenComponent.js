import React from 'react';

const ChildrenComponent = (props) => {
	return (
		<div>
			안녕하세요, 제 이름은 {props.name}입니다. <br />
			children 값은 {props.children}입니다.
		</div>
	);
};

ChildrenComponent.defaultProps = {
	name: '기본 이름',
};

export default ChildrenComponent;
