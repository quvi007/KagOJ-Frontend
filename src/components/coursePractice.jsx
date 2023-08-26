import { useLoaderData } from "react-router-dom";
import CourseNavBar from './courseNavBar';
export default function CoursePractice() {
    const { course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="practice"/>
            <div>
                <h2>Practice Problems</h2>
            </div>
        </>
    );
}