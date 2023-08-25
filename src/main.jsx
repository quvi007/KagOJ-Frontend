import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import ErrorPage from './error-page';
import SemestersRoot, { action as semestersRootAction, loader as semestersRootLoader } from './routes/semestersRoot';

import Semester, { loader as semesterLoader, } from './routes/semester';
import { action as semesterDeleteAction } from './routes/semesterDelete';
import SemesterEdit, { action as semesterEditAction } from './routes/semesterEdit';
import SemestersIndex from './routes/semestersIndex';
import CreateAssignmentPage from './routes/createAssignment';
import Assignments from './routes/assignments';
import AssignmentDetails from './routes/assignmentsDetails'



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

  //dummy - rakib
  {
    path: "/create",
    element: <CreateAssignmentPage />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
    // action: semestersRootAction,
  },
  {
    path: "/assignments",
    element: <Assignments />,
    errorElement: <ErrorPage/>,
    // loader: semestersRootLoader,
    // action: semestersRootAction,
  },
  // {
  //     <Switch>
  //       <Route path="/assignments" exact component={Assignments} />
  //       <Route path="/assignment/:assignmentId" component={AssignmentDetails} />
  //     </Switch>
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
