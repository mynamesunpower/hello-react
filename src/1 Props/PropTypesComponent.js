import React from 'react';
import PropTypes from 'prop-types';

const PropTypesComponent = ({ name, children }) => {
	return <div>{name}</div>;
};

PropTypesComponent.defaultProps = {
	name: '기본 이름',
};

// propTypes를 이용해 props의 타입을 지정 가능하다. 상단에 import하기는 해야 함.
PropTypesComponent.propTypes = {
	name: PropTypes.string,
};

export default PropTypesComponent;
