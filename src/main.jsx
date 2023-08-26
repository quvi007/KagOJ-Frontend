import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './scss/styles.scss';

import SemestersRoot, { loader as semestersRootLoader } from './routes/semestersRoot';
import ErrorPage from './error-page';

import Semester, { loader as semesterLoader, } from './routes/semester';
import SemesterEdit, { action as semesterEditAction, loader as semesterEditLoader } from './routes/semesterEdit';
import { action as semesterDeleteAction } from './routes/semesterDelete';
import CoursesRoot, { loader as coursesRootLoader } from './routes/coursesRoot';
import SemestersIndex from './routes/semestersIndex';
import SemesterCreate, { action as semesterCreateAction } from './routes/semesterCreate';
import CourseCreate, { action as courseCreateAction, loader as courseCreateLoader } from './routes/courseCreate';
import CoursesGrid from './components/coursesGrid';
import Course, { loader as courseLoader } from './routes/course';
import CourseEdit, { loader as courseEditLoader, action as courseEditAction } from './routes/courseEdit';
import { action as courseDeleteAction } from './routes/courseDelete';

import CoursePractice from './components/coursePractice';
import CourseAssignments from './components/courseAssignments';
import CourseMembers from './components/courseMembers';

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
        action: courseCreateAction,
        loader: courseCreateLoader,
      },
      {
        path: ":courseId",
        element: <Course/>,
        loader: courseLoader,
        children: [
          {
            index: true,
            element: <Navigate to={"practice"} replace/>
          },
          {
            path: "practice",
            element: <CoursePractice/>,
            loader: courseLoader
          },
          {
            path: "assignments",
            element: <CourseAssignments/>,
            loader: courseLoader
          },
          {
            path: "members",
            element: <CourseMembers/>,
            loader: courseLoader
          },
          {
            path: "edit",
            element: <CourseEdit/>,
            loader: courseEditLoader,
            action: courseEditAction
          },
        ]
      },
      {
        path: ":courseId/delete",
        action: courseDeleteAction
      },
    ]
  },
  //dummy
  // {
  //   path: "/assignments",
  //   element: <Assignments />,
  //   errorElement: <ErrorPage/>,
  //   loader: semestersRootLoader,
  //   // children: [
  //   //   {
  //   //     path: "assignments/:assignmentId",
  //   //     element: <AssignmentDetails/>,
  //   //     action: courseCreateAction
  //   //   },
  //   // ]
  // },
  // {
  //   path: "/new-assignment",
  //   element: <CreateAssignment />,
  //   errorElement: <ErrorPage/>,
  //   loader: semestersRootLoader,
  // },
  // {
  //   path: "/submit-ass",
  //   element: <SubmitAssignment />,
  //   errorElement: <ErrorPage/>,
  //   loader: semestersRootLoader,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
