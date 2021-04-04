/*
    1. 마운트
    DOM이 생성되고 브라우저 상에 나타나는 것.
    호출 메서드 순서
    컴포넌트 만들기 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount

    1. constructor
    컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
    초기 state를 정할 수 있다.

    2. getDerivedStateFromProps
    props에 있는 값을 state에 넣을 때 사용하는 메서드
    React v16.3 이후 추가된 메서드. props로 받아온 값을 state에 동기화시키는 용도로 사용.

    3. render(): 우리가 준비한 UI를 렌더링하는 메서드.
    -- 컴포넌트 모양새를 정의한다. 컴포넌트에서 가장 중요한 메서드. 라이프사이클 메서드 중 유일한 필수 메서드이기도 하다.
    이 안에서 this.props와 this.state에 접근 가능하고, react 요소를 반환한다.
    react 요소란 div같은 태그도 될 수 있고 따로 선언한 컴포넌트가 될 수도 있다.
    아무것도 보여주고 싶지 않다면 null이나 false를 반환하라.
    *주의* 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState를 사용하면 안되며, 브라우저의 DOM에 접근해서도 안된다.
    DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount에서 처리해야 함.

    4. componentDidMount
    컴포넌트가 웹 브라우저 상에 나타난 후 호출하는 메서드
    첫 렌더링이 다 마치고 실행된다. 이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출하거나
    이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리하면 됨.
*/
