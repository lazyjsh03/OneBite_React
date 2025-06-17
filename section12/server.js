import express from "express";
import cors from "cors";
import {
  initDb,
  getAllDiaries,
  createDiary,
  updateDiary,
  deleteDiary,
} from "./src/util/database.js";

const app = express();
const port = 4000; // API 서버 포트

// 미들웨어 설정
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 요청 본문 파싱

// 서버 시작 시 데이터베이스 초기화
initDb();

// --- API 라우트(경로) 설정 ---

// [GET] /diaries : 모든 일기 조회
app.get("/diaries", async (req, res) => {
  try {
    const diaries = await getAllDiaries();
    res.json(diaries);
  } catch (error) {
    console.error("GET /diaries Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// [POST] /diaries : 새 일기 생성
app.post("/diaries", async (req, res) => {
  try {
    const { createdDate, emotionId, content } = req.body;
    const newDiary = await createDiary(createdDate, emotionId, content);
    res.status(201).json(newDiary);
  } catch (error) {
    console.error("POST /diaries Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// [PUT] /diaries/:id : 일기 수정
app.put("/diaries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { createdDate, emotionId, content } = req.body;
    await updateDiary(id, createdDate, emotionId, content);
    res.json({ id: Number(id), createdDate, emotionId, content });
  } catch (error) {
    console.error(`PUT /diaries/${req.params.id} Error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// [DELETE] /diaries/:id : 일기 삭제
app.delete("/diaries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteDiary(id);
    res.status(204).send(); // 성공 시 응답 본문 없음
  } catch (error) {
    console.error(`DELETE /diaries/${req.params.id} Error:`, error);
    res.status(500).json({ error: error.message });
  }
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("API Endpoints are ready.");
  console.log("GET    http://localhost:4000/diaries");
  console.log("POST   http://localhost:4000/diaries");
  console.log("PUT    http://localhost:4000/diaries/:id");
  console.log("DELETE http://localhost:4000/diaries/:id");
});
