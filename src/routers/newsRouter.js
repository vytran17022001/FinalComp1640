const express = require("express");
const router = express.Router();
const NewsController = require("../contronllers/NewsContronller");

router.post("/StaffsendEmail", NewsController.StaffsendEmail);
router.delete("/deleteNews/:deleteID", NewsController.deleteNews);
router.put("/upNews/:upDateID", NewsController.upDateNews);
router.post("/createNews", NewsController.createNews);
router.get("/readNews", NewsController.readNews);
router.get("/", NewsController.index);

module.exports = router;
