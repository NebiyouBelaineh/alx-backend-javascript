#!/usr/bin/env node
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

export default (appRoute) => {
  appRoute.get('/', AppController.getHomepage);
  appRoute.get('/students', StudentsController.getAllStudents);
  appRoute.get('/students/:major', StudentsController.getAllStudentsByMajor);
};
