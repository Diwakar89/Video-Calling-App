// importing express module
const express = require("express");
const userRouter = require('./routers/userRouter');
const cors = require('cors');


// initializing express
const app = express();
const server = require("http").createServer(app);
const port = 5000;

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use( cors({
  origin : [ 'http://localhost:3000' ]
}) );

// to parse json data to javascript
app.use(express.json());

// using middleware
app.use('/user', userRouter);

// route
app.get('/', (req, res) => {
    // send function is used for string response
    res.send('request accepted');
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", {
      signal: signalData,
      from,
      name,
    });
  });

  socket.on("updateMyMedia", ({ type, currentMediaStatus }) => {
    console.log("updateMyMedia");
    socket.broadcast.emit("updateUserMedia", { type, currentMediaStatus });
  });

  socket.on("msgUser", ({ name, to, msg, sender }) => {
    io.to(to).emit("msgRcv", { name, msg, sender });
  });

  socket.on("answerCall", (data) => {
    socket.broadcast.emit("updateUserMedia", {
      type: data.type,
      currentMediaStatus: data.myMediaStatus,
    });
    io.to(data.to).emit("callAccepted", data);
  });

  socket.on("endCall", ({ id }) => {
    io.to(id).emit("endCall");
  });
});

// starting the server
server.listen(port, () => {
  console.log("express server started")
})