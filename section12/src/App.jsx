import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  useReducer,
  useRef,
  useContext,
  createContext,
  useEffect,
  useState,
} from "react";
// pages
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
// components
import Button from "./components/Button";
import Header from "./components/Header";
// database
// import pool from "./util/database";

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      return [...state, action.data];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    }
    case "DELETE": {
      return state.filter((item) => String(item.id) !== String(action.id));
    }
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const API_URL = "http://localhost:4000/diaries";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const res = await fetch(API_URL);
        const rawData = await res.json();

        // createdDate 숫자로 변환
        const parsedData = rawData.map((item) => ({
          ...item,
          createdDate: Number(item.createdDate),
        }));

        if (Array.isArray(parsedData)) {
          dispatch({
            type: "INIT",
            data: parsedData,
          });
        }
      } catch (error) {
        console.error("Failed to fatch Diary: ", error);
        alert("데이터 불러오기 실패");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDiaries();
  }, []);

  // create new diary
  const onCreate = async (createdDate, emotionId, content) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ createdDate, emotionId, content }),
      });
      const newData = await res.json();
      dispatch({
        type: "CREATE",
        data: {
          ...newData,
          createdDate: Number(newData.createdDate),
        },
      });
    } catch (error) {
      console.error("Failed to create Diary: ", error);
      alert("새 일기 생성 실패");
    }
  };

  // edit diary
  const onUpdate = async (id, createdDate, emotionId, content) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ createdDate, emotionId, content }),
      });
      const updatedData = await res.json();
      dispatch({
        type: "UPDATE",
        data: {
          ...updatedData,
          createdDate: Number(updatedData.createdDate),
        },
      });
    } catch (error) {
      console.error("Failed to update Diary: ", error);
      alert("일기 수정 실패");
    }
  };

  // delete diary
  const onDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      dispatch({
        type: "DELETE",
        id: id,
      });
    } catch (error) {
      console.error("Failed to delete Diary: ", error);
      alert("일기 삭제 실패");
    }
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
