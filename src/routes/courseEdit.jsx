import { useLoaderData, redirect } from "react-router-dom";
import { updateCourse, getCourse } from "../courses";
import CourseEditComponent from "../components/courseEditComponent";
import { getSemester } from "../semesters";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateCourse(params.courseId, params.semesterId, updates);
    return redirect(`/semesters/${params.semesterId}/courses/${params.courseId}`);
}

export async function loader({ params }) {
  const semester = await getSemester(params.semesterId);
  const course = await getCourse(params.courseId);
  return { course, semester };
}

export default function CourseEdit() {
  const { course, semester } = useLoaderData();

  return (
    <CourseEditComponent course={course}/>
  );
}
