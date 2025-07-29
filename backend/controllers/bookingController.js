const db = require("../db");
const sendEmail = require("../utils/sendEmail");

exports.createBooking = (req, res) => {
  const { room, date } = req.body;
  const user_id = req.user.id;

  db.query(
    "INSERT INTO bookings (room, date, user_id) VALUES (?, ?, ?)",
    [room, date, user_id],
    async (err, result) => {
      if (err) return res.status(500).json({ error: err });

      await sendEmail(req.user.email, "Booking Confirmation", You booked room ${room} on ${date});
      res.json({ message: "Booking created successfully" });
    }
  );
};

exports.getBookings = (req, res) => {
  db.query("SELECT * FROM bookings", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.deleteBooking = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM bookings WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Booking deleted" });
  });
};