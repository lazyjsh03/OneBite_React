import EmotionItem from "./EmotionItem";
import Button from "./Button";
import "./Editor.css";
import { emotionList } from "../util/constants";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>Today's Date</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>Today's Emotion</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>Today's Diary</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="How was your day?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"cancel"} />
        <Button
          onClick={onClickSubmitButton}
          text={"submit"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
