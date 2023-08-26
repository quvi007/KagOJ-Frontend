import { useLoaderData } from "react-router-dom";
import CourseNavBar from './courseNavBar';
export default function CourseAssignments() {
    const { course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="assignments"/>
            <div>
                <h2>Assignments</h2>
            </div>
        </>
    );
}