import http from "http";
import app from "./app.js";
import "dotenv/config";
import connectDB from "./db/connect.db.js";

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
