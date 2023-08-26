import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './scss/styles.scss';
import * as bootstrap from 'bootstrap';


import SemestersRoot, { loader as semestersRootLoader } from './routes/semestersRoot';
import ErrorPage from './error-page';

import Semester, { loader as semesterLoader, } from './routes/semester';
import SemesterEdit, { action as semesterEditAction, loader as semesterEditLoader } from './routes/semesterEdit';
import { action as semesterDeleteAction } from './routes/semesterDelete';
import CoursesRoot, { loader as coursesRootLoader } from './routes/coursesRoot';
import SemestersIndex from './routes/semestersIndex';
import SemesterCreate, { action as semesterCreateAction } from './routes/semesterCreate';
import CourseCreate, { action as courseCreateAction } from './routes/courseCreate';
import CoursesGrid from './components/coursesGrid';
import Course, { loader as courseLoader } from './routes/course';
import CourseEdit, { loader as courseEditLoader, action as courseEditAction } from './routes/courseEdit';

const router = createBrowserRouter([
  {
    path: "/semesters",
    element: <SemestersRoot />,
    errorElement: <ErrorPage/>,
    loader: semestersRootLoader,
    children: [
      {
        index: true,
        element: <SemestersIndex/>
      },
      {
        path: "new",
        element: <SemesterCreate/>,
        action: semesterCreateAction
      },
      {
        path: ":semesterId",
        element: <Semester/>,
        loader: semesterLoader,
        children: [
          {
            index: true,
            element: <CoursesGrid/>,
            loader: coursesRootLoader
          }
        ]
      },
      {
        path: ":semesterId/edit",
        element: <SemesterEdit/>,
        loader: semesterEditLoader,
        action: semesterEditAction
      },
      {
        path: ":semesterId/delete",
        action: semesterDeleteAction
      },
    ],
  },
  {
    path: "/semesters/:semesterId/courses",
    element: <CoursesRoot/>,
    loader: coursesRootLoader,
    children: [
      {
        path: "new",
        element: <CourseCreate/>,
        action: courseCreateAction
      },
      {
        path: ":courseId",
        element: <Course/>,
        loader: courseLoader
      },
      {
        path: ":courseId/edit",
        element: <CourseEdit/>,
        loader: courseEditLoader,
        action: courseEditAction
      },
      {
        path: ":courseId/delete",
        // action: courseDeleteAction
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
