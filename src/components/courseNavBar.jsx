export default function CourseNavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Course Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Practice</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Assignments</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Course Info</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Members</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}