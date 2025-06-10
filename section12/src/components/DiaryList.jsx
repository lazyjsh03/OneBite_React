import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./DiaryList.css";
// components
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      // 원본은 변경하지 않고 새로운 배열을 반환
      if (sortType === "latest") {
        return Number(b.createdDate) - Number(a.createdDate); // 최신순
      } else {
        return Number(a.createdDate) - Number(b.createdDate); // 오래된 순
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>latest</option>
          <option value={"oldest"}>oldest</option>
        </select>
        <Button
          onClick={() => nav(`/new`)}
          text={"New diary"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
