const express = require("express");
const { createBooking, getBookings, deleteBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getBookings);
router.delete("/:id", authMiddleware, deleteBooking);

module.exports = router;