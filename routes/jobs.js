const express = require('express');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Sample data structure for jobs
let jobs = [
  { id: 1, user_id: 1, title: 'Software Developer', status: 'Applied', company: 'Company A' },
  // ... more jobs
];

// Get jobs for the authenticated user
router.get('/jobs', authenticateToken, (req, res) => {
  const userJobs = jobs.filter(job => job.user_id === req.user.id);
  res.json(userJobs);
});

module.exports = router;
