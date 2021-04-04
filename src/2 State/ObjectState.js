// 객체 다루기
const object = { a: 1, b: 2, c: 3 };
const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어쓰기

// 배열 다루기
const array = [
	{ id: 1, value: true },
	{ id: 2, value: true },
	{ id: 3, value: false },
];
let nextArray = array.concat({ id: 4 }); // 1. 새 항목 추가
nextArray.filter((item) => item.id !== 2); // 2. id가 2가 아닌 항목만 두기
nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item)); // 3. id가 1인 항목의 value를 false로

// 컴포넌트를 만들어서 내보내고 불러오는 방법
// props를 사용하는 방법
// state를 사용하는 방법
// props와 state는 둘 다 Component에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해 보일 수 있지만 그 역할은 매우 다르다.
// props는 부모 컴포넌트가 설정하고, state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있다.
// props를 사용한다고 값이 무조건 고정적이지는 않다.
// 부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고, 자식 컴포넌트에서 특정 이벤트가 발생할 때 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할 수 있음.
