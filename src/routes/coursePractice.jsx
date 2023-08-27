import { useLoaderData } from "react-router-dom";
import CourseNavBar from "../components/courseNavBar";
import { getCourse } from "../courses";
import { getSemester } from "../semesters";

export async function loader({ params }) {
    const problems = [{}];
    const course = await getCourse(params.courseId);
    const semester = await getSemester(params.semesterId);
    return { problems, course, semester };
}

export default function CoursePractice() {
    const { problems, course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="practice"/>
            <div>
                <h2>Practice Problems</h2>
            </div>
        </>
    );
}