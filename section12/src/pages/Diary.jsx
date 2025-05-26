import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params); // {id: "1"} 등으로 출력됩니다.

  return <div>Num.{params.id} Diary</div>;
};

export default Diary;
