const httpClient = require("./base.service");

const getCourses = () => httpClient.get('/courses')

const getCourse = (courseId) => httpClient.get(`/courses/${courseId}`)

const createCourse = (data) => httpClient.post('/courses', data)

const deleteCourse = (courseId) => httpClient.delete(`/courses/${courseId}`)

const editCourse = (courseId, data) => httpClient.patch(`/courses/${courseId}`, data)

module.exports = { getCourses, getCourse, createCourse, deleteCourse, editCourse }


