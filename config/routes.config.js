const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.controller')

router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/courses', coursesController.list)
router.get('/courses/new', coursesController.create)
router.get('/courses/:id', coursesController.courseDetails)
router.post('/courses/new', coursesController.doCreate)
router.post('/courses/:id/delete', coursesController.delete)
router.delete('/courses/:id/delete', coursesController.deleteClient)
router.get('/courses/:id/edit', coursesController.edit)
router.post('/courses/:id/edit', coursesController.doEdit)

module.exports = router;