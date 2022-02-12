const coursesService = require('../services/courses.service')

module.exports.list = (req, res, next) => {
    coursesService.getCourses()
        .then((coursesFound) => {
            console.log(coursesFound.data)
            res.render('courses', { courses: coursesFound.data })
        })
        .catch(error => next(error))
}

module.exports.courseDetails = (req, res, next) => {
    coursesService.getCourse(req.params.id)
        .then((courseFound) => {
            console.log(courseFound.data)
            res.render('courseDetails', { course: courseFound.data })
        })
        .catch(error => next(error))
}

module.exports.create = (req, res, next) => {
    res.render('newCourse')
}

module.exports.doCreate = (req, res, next) => {
    coursesService.createCourse(req.body)
        .then(() => res.redirect('/courses'))
        .catch(error => next(error))
}

module.exports.delete = (req, res, next) => {
    coursesService.deleteCourse(req.params.id)
        .then(() => res.redirect('/courses'))
        .catch(error => next(error))
}

module.exports.deleteClient = (req, res, next) => {
    coursesService.deleteCourse(req.params.id)
      .then(() => res.status(200).json({}))
      .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
    coursesService.editCourse(req.params.id)
        .then((courseToEdit) => {
            res.render('courseEdit', { course: courseToEdit.data })
        })
        .catch(error => next(error))
}

module.exports.doEdit = (req, res, next) => {
    coursesService.editCourse(req.params.id, req.body)
        .then(() => res.redirect('/courses'))
        .catch(error => next(error))
}