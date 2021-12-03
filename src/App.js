import React, { useState } from 'react';
import './App.css';
// import BasicButton from './components/Button/BasicButton';
// import Content from "./components/Content";
// import TOC from "./components/TOC";
// import Subject from "./components/Subject";


// Use Hook
const App = () => {
  const [number, setNumber] = useState(0);

// BasicButton
function BasicButton(props) {
  return (
      <button onClick={() => setNumber(number+1)}>{props.name}</button>
  );
}

// TextButton
function TextButton(props) {
  return (
    <text onClick={() => setNumber(number+1)}>{props.name}</text>
  )
}

// ImageButton
function ImageButton(props) {
  return (
    <img src={props.src} alt={props.alt} onClick={() => setNumber(number + 1)}/>
  )
}

  return (
    <div className="App">
      <div className="Counter">
        <h2>{number}</h2>
      </div>
      <div className="ButtonWrapper">
        <div className="BasicButton"><BasicButton name="Basic Button" id="BasicButton"/></div>
        <div className="TextButton"><TextButton name="누르면 1 증가"/></div>
        <ImageButton className="ImageButton" src="/image/tigger.png" alt="tigger"/>
      </div>
    </div>
  );
};









// 여기는 연습하던 코드입니다. -> 주석처리
// class App extends Component {
//   // Render함수보다 먼저 실행되면서 초기화하고 싶을 때 -> Constructor안에 넣어준다.
//   // State의 값 초기화
//   constructor(props) {
//     super(props);
//     this.state = {
//       mode:"welcome",
//       welcome:{title:"Welcome", desc:"Hello, React!!"},
//       subject:{title:'WEB', sub:'World Wide Web!'},
//       contents: [
//         {id:1, title: 'HTML', desc:'HTML is for information.'},
//         {id:2, title: 'CSS', desc:'CSS is for design.'},
//         {id:3, title: 'JavaScript', desc:'JavaScript is for interaction.'},
//       ]
//     }
//   }
//   render() {
//     var _title, _desc = null;
//     if(this.state.mode === 'welcome') {
//       _title = this.state.welcome.title;
//       _desc = this.state.welcome.desc;
//     } 
//     else if(this.state.mode === 'read'){
//       _title = this.state.contents[0].title;
//       _desc = this.state.contents[0].desc;
//     }
//     return (
//       <div className="App">
//         {/* <Subject 
//           title={this.state.subject.title}
//           sub={this.state.subject.sub}>
//         </Subject> */}

//         <header>
//           <h1><a href="/" onClick={function(e){
//             // state가 바뀌면 render는 page를 reload해서 새로 그리는 작업을 한다. (별로 좋지 않겠지?)
//             // preventDefault: page가 reload 되는 것을 막는다.
//             e.preventDefault();
//             // 여기서 this를 바로 부르면 Component를 부르는게 아니라 Undefined로 인식된다.
//             // this.state.mode = 'welcome';
//             // React에서 정한 규칙 -> 1) this를 부르고 싶으면 함수가 끝나는 지점에 bind(this)로 this를 불러올 수 있다
//             // 2) this.setState 사용
//             this.setState({
//               mode:'welcome'
//             });
//           }.bind(this)}>{this.state.subject.title}</a></h1>
//           {this.state.subject.sub}
//         </header>

//         <TOC data={this.state.contents}></TOC>
//         <Content title={_title} desc={_desc}></Content>
//       </div>
//     )
//   }
// }


export default App;
