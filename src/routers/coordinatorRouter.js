const express = require("express");
const CoordinatorController = require("../controllers/CoordinatorController");
const router = express.Router();
const checkLogin = require("../utils/checkLogin");
const { isMarketing_Coordinator } = require("../utils/authorize");

router.put("/updateAr/:articlesId", CoordinatorController.updateAr);
router.get("/", CoordinatorController.index);
module.exports = router;
