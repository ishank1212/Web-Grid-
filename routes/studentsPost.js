import express from 'express';
const router = express.Router();
import Student from '../models/studentModel';

router.post('/students', async (req, res) => {
  const { name, email, emotionalStatus } = req.body;

  console.log("c1")
  const newStudent = new Student({
    name,
    email,
    emotionalStatus
  });

  try {
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;