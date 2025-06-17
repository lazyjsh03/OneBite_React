import sqlite3 from "sqlite3";
import path, { resolve } from "path";

const sqlite = sqlite3.verbose();

const dbPath = path.resolve(path.dirname, "..", "..", "diary.db");
const db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("일기 데이터베이스에 연결됨.");
});

// 테이블 초기화
export const initDb = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS diary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createDate INTEGER,
      emotionId INTEGER,
      context TEXT,
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
      (err) => {
        if (err) {
          reject(err);
        }
        // 새로 생성된 아이템의 id와 함께 데이터 반환
        resolve({ id: this.lastId, createdDate, emotionId, content });
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
      (err) => {
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
    db.run(`DELETE FROM diary WHERE id = ?`, id, (err) => {
      if (err) {
        reject(err);
      }
      resolve({ changes: this.changes });
    });
  });
};
