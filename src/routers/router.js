const homeRouter = require("./homeRouter");
const usersRouter = require("./usersRouter");
const articlesRouter = require("./articlesRouter");
const adminRouter = require("./adminRouter");
const coordinatorRouter = require("./coordinatorRouter");
const checkLogin = require("../utils/checkLogin");
const authentication = require("../utils/authentication");

function router(app) {
  app.use("/coordinator", checkLogin, coordinatorRouter);
  app.use("/articles", checkLogin, articlesRouter);
  app.use("/admin", checkLogin, adminRouter);
  app.use("/users", usersRouter);
  app.use("/", authentication, homeRouter);
}

module.exports = router;
