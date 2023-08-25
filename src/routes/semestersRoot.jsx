import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation } from "react-router-dom";
import { getSemesters, createSemester } from "../semesters";

export async function action() {
  const semester = await createSemester();
  return redirect(`/semesters/${semester.id}/edit`);
}

export async function loader() {
  const semesters = await getSemesters();
  return { semesters };
}

export default function SemestersRoot() {
    const { semesters } = useLoaderData();
    const navigation = useNavigation();

    return (
      <>
        <div id="sidebar">
          <h1>Semesters</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search semesters"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {semesters.length ? (
              <ul>
                {semesters.map((semester) => (
                  <li key={semester.id}>
                    <NavLink
                      to={`${semester.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                          ? "pending"
                          : ""
                      }
                    >
                      {semester.name ? (
                        <>
                          {semester.name}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {semester.favorite && <span>★</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No semesters</i>
              </p>
            )}
          </nav>
        </div>
        <div id="detail"
          className={navigation.state === "loading" ? "loading" : ""}>
          <Outlet/>
        </div>
      </>
    );
  }