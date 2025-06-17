import sqlite3 from "sqlite3";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sqlite = sqlite3.verbose();

const dbPath =
  process.env.DATABASE_PATH || path.resolve(__dirname, "..", "..", "diary.db");
const db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the diary database");
});

// 테이블 초기화
export const initDb = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS diary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdDate INTEGER,
      emotionId INTEGER,
      content TEXT
    )`,
    (err) => {
      if (err) {
        console.error("Error creating table", err.message);
      } else {
        console.log("Table 'diary' is ready.");
      }
    }
  );
};

// 모든 일기 조회
export const getAllDiaries = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM diary ORDER BY createdDate DESC", [], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
};

// 일기 추가
export const createDiary = (createdDate, emotionId, content) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO diary (createdDate, emotionId, content) VALUES (?, ?, ?)`,
      [createdDate, emotionId, content],
      function (err) {
        if (err) {
          reject(err);
        }
        // 새로 생성된 아이템의 id와 함께 데이터 반환
        resolve({ id: this.lastID, createdDate, emotionId, content });
      }
    );
  });
};

// 일기 수정
export const updateDiary = (id, createdDate, emotionId, content) => {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE diary SET createdDate = ?, emotionId = ?, content = ? WHERE id = ?`,
      [createdDate, emotionId, content, id],
      function (err) {
        if (err) {
          reject(err);
        }
        resolve({ changes: this.changes });
      }
    );
  });
};

// 일기 삭제
export const deleteDiary = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM diary WHERE id = ?`, id, function (err) {
      if (err) {
        reject(err);
      }
      resolve({ changes: this.changes });
    });
  });
};
