const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(
    "/Users/davidspc/Desktop/Northcoders_new/Project/live-messaging/live-messaging/public/index.html"
  );
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", `user: ${msg}`);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
