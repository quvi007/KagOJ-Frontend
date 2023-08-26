import { redirect } from "react-router-dom";
import CourseEditComponent from "../components/courseEditComponent";
import { createCourse } from "../courses";

export async function action({ request, params }) {
    const formData = await request.formData();
    const course = Object.fromEntries(formData);
    const retCrs = await createCourse(course, params.semesterId);
    return redirect(`/semesters/${params.semesterId}`);
}

export default function CourseCreate() {
    return (
    <div className="mt-4">
        <h2>Create New Course</h2>
        <CourseEditComponent course={{}}/>
    </div>
    );
}
