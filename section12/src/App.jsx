import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useReducer, useRef, useContext, createContext } from "react";
// pages
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
// components
import Button from "./components/Button";
import Header from "./components/Header";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2025-05-27").getTime(),
    emotionId: 1,
    content: "1st diary",
  },
  {
    id: 2,
    createdDate: new Date("2025-05-26").getTime(),
    emotionId: 2,
    content: "2nd diary",
  },
  {
    id: 3,
    createdDate: new Date("2025-04-01").getTime(),
    emotionId: 3,
    content: "3rd diary",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // create new diary
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // edit diary
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // delete diary
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

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
