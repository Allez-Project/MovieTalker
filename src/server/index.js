// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// require("dotenv").config();
// // CORS
// const cors = require("cors");

// const axios = require("axios");

// // body-parser
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // CORS 허용
// let corsOptions = {
//   origin: "https://openapi.naver.com",
//   credentials: true,
// };
// app.use(cors(corsOptions));

// // 네이버 API 정보 (환경변수 사용)
// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

// app.get("/api/search", (req, res) => {
//   // 클라이언트에서 보낸 검색어
//   const searchKeyword = req.query.query;

//   axios
//     .get("https://openapi.naver.com/v1/search/movie.json", {
//       params: {
//         query: searchKeyword,
//         display: 100, // 검색 결과 노출 개수
//       },
//       headers: {
//         "X-Naver-Client-Id": CLIENT_ID,
//         "X-Naver-Client-Secret": CLIENT_SECRET,
//       },
//     })
//     .then((response) => {
//       const { data } = response;
//       // 클라이언트에 보내기
//       res.send(data.items);
//       console.log(response);
//     })
//     .catch((error) => {
//       let message = "Unknown Error";
//       if (error instanceof Error) message = error.message;
//       console.log(message);
//     });
// });
