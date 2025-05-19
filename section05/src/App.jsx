import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// 리렌더링
// 1. state 값이 변경되었을 때
// 2. props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 되었을 때때

function App() {
  // App component -> root component

  return (
    <>
      <div>
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
