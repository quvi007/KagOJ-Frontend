import { useLoaderData } from "react-router-dom";
import CourseNavBar from './courseNavBar';
export default function CourseMembers() {
    const { course, semester } = useLoaderData();
    return (
        <>
            <CourseNavBar course={course} semester={semester} tabName="members"/>
            <div>
                <h2>Members</h2>
            </div>
        </>
    );
}