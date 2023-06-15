const express = require('express')
// testUser is just to stop the test user from deleting and updating jobs
const testUser = require('../middleware/test-user')


const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats,
} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)

router.route('/:id').get(getJob).delete(testUser, deleteJob).patch(testUser, updateJob)

module.exports = router
