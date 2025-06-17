import sqlite3 from "sqlite3";
var db = sqlite3.verbose();
db = new db.Database("../../diary.db");

db.close();
