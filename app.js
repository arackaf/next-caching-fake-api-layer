const express = require("express");

const app = express();

app.get("/api/a", (req, resp) => {
  return resp.json({ a: +new Date() });
});

app.get("/api/b", (req, resp) => {
  return resp.json({ b: +new Date() });
});

app.get("/api/c", (req, resp) => {
  return resp.json({ c: +new Date() });
});

app.listen(5002);
