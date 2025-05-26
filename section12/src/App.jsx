import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/": Home page
// 2. "/new": Create new diary
// 3. "/diary": View diary information
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };
  // Routes 컴포넌트 안에는 <Route> 컴포넌트만 들어가야 합니다.
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />

      <Button
        text={"123"}
        onClick={() => {
          console.log("button clicked");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("button clicked");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("button clicked");
        }}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
