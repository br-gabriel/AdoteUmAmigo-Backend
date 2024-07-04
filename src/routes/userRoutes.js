const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/register", upload.single("avatar"), registerUser);

router.post("login", loginUser);

module.exports = router;
