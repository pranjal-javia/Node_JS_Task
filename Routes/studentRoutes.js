const express = require('express');
const studentController = require("../controllers/studentController");

const router = express.Router();

router.get("/", studentController.getAllStudents);
router.post("/create", studentController.createStudent);
router.post("/", studentController.getStudent);
router.patch("/update", studentController.updatedStudent);
router.delete("/delete", studentController.deleteStudent);

module.exports = router;
