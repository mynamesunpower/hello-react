import React, { Component } from "react";

class Ex05_2_createRef extends Component {
  // createRef()를 사용해서 ref를 만들기 위해 멤버 변수에 담아야 함.
  // 이후, ref를 달고자 하는 요소의 ref에 props로 넣어 주면 완료.
  // 추후 ref를 설정한 DOM에 접근하기 위해 this.input.current를 넣어주면 된다.
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default Ex05_2_createRef;
