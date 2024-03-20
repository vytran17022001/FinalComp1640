const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { isAdmin } = require("../utils/authorize");

router.post("/facultyC", AdminController.facultyC);
router.delete(
  "/deleteCloseDates/:closeDateId",
  AdminController.deleteCloseDates
);
router.post("/closeDate", AdminController.closeDate);
router.delete("/deleteAcademic/:academicId", AdminController.deleteAcademic);
router.post("/academic", AdminController.academic);
router.put("/update/:id", isAdmin, AdminController.update);
router.get("/", isAdmin, AdminController.index);

module.exports = router;
