import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle("Write New Diary");

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"Write New Diary"}
        leftChild={<Button onClick={() => nav(-1)} text={"< back"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
