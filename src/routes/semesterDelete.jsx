import { redirect } from "react-router-dom";
import { deleteSemester } from "../semesters";

export async function action({ params }) {
    await deleteSemester(params.semesterId);
    return redirect("/semesters");
}