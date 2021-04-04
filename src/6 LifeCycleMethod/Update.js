/*
    업데이트
    컴포넌트는 다음과 같은 총 4가지 경우에 업데이트한다.

    1. props가 바뀔 때
    -- 부모 컴포넌트에서 넘겨주는 props가 바뀔 때. 컴포넌트에 전달하는 프랍스의 값이 바뀌면 컴포넌트 렌더링이 이루어진다.

    2. state가 바뀔 때
    -- 컴포넌트 자신이 들고 있는 state가 setState를 통해 업데이트될 때.

    3. 부모 컴포넌트가 리렌더링될 때
    자신에게 할당된 props가 바뀌지 않아도, 또는 자신이 들고 있는 state가 바뀌지 않아도 부모 컴포넌트가 리렌더링되면 자식 또한 리렌더링된다.
    4. this.forceUpdate로 강제로 렌더링을 트리거할 때

    컴포넌트를 업데이트할 때는 다음 메서드를 호출한다.
    업데이트 발생 -> getDerivedStateFromProps -> shouldComponentUpdate (true 반환시 render/ false 반환시 여기서 작업 취소)
    -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

    getDerivedStateFromProps:
    이 메서드는 마운트 과정에서도 호출되며, props의 변화에 따라 state값에도 변화를 주고 싶을 때 사용

    shouldComponentUpdate:
    컴포넌트가 리렌더링을 할지 말지 결정하는 메서드. 이 메서드는 true 혹은 false를 반환해야 한다.
    만약 특정 함수에서 this.forceUpdate()를 호출한다면 이 과정을 생략하고 바로 render()를 호출한다.
    props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드.
    컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 항상 true를 반환함.

    render(): 컴포넌트 리렌더링

    getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전 호출하는 메서드

    componentDidUpdate():
    컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

*/
