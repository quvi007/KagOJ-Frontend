import { Link } from "react-router-dom";

export default function CourseNavBar({course, semester, tabName}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            {/* <nav className="nav nav-pills nav-fill"> */}
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link replace className={tabName === "practice" ? "nav-link active" : "nav-link"} aria-current="page" to={`/semesters/${semester.id}/courses/${course.id}/practice`}>Practice</Link>
                        </li>
                        <li className="nav-item">
                            <Link replace className={tabName === "assignments" ? "nav-link active" : "nav-link"} to={`/semesters/${semester.id}/courses/${course.id}/assignments`}>Assignments</Link>
                        </li>
                        <li className="nav-item">
                            <Link replace className={tabName === "members" ? "nav-link active" : "nav-link"} to={`/semesters/${semester.id}/courses/${course.id}/members`}>Members</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}