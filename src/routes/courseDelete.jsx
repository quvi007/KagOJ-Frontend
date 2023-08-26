import { redirect } from "react-router-dom";
import { deleteCourse } from "../courses";

export async function action({ params }) {
    const res = await deleteCourse(params.courseId);
    return redirect(`/semesters/${params.semesterId}/courses`);
}