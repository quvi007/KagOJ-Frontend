import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import SemestersRoot, { loader as semestersRootLoader, action as semestersRootAction } from './routes/semestersRoot';
import ErrorPage from './error-page';

import Semester, { loader as semesterLoader, } from './routes/semester';
import SemesterEdit, { action as semesterEditAction } from './routes/semesterEdit';
import { action as semesterDeleteAction } from './routes/semesterDelete';
import SemestersIndex from './routes/semestersIndex';

const router = createBrowserRouter([
  {
    path: "/semesters",
    element: <SemestersRoot />,
    errorElement: <ErrorPage/>,
    loader: semestersRootLoader,
    action: semestersRootAction,
    children: [
      {
        index: true,
        element: <SemestersIndex/>
      },
      {
        path: ":semesterId",
        element: <Semester />,
        loader: semesterLoader,
      },
      {
        path: ":semesterId/edit",
        element: <SemesterEdit />,
        loader: semesterLoader,
        action: semesterEditAction,
      },
      {
        path: ":semesterId/delete",
        action: semesterDeleteAction,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
