import { useParams, useNavigate } from "react-router-dom";
import { getStringedDate } from "../util/get-stringed-date";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) {
    return <div>loading...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} Diary`}
        leftChild={<Button onClick={() => nav(-1)} text={"< back"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"edit"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;
