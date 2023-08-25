import { Form, useLoaderData, redirect } from "react-router-dom";
import { updateSemester } from "../semesters";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateSemester(params.semesterId, updates);
    return redirect(`/semesters/${params.semesterId}`);
}

export default function SemesterEdit() {
  const { semester } = useLoaderData();

  return (
    <Form method="post" id="semester-form">
      <p>
        <span>Name</span>
        <input
          placeholder="Semester Name"
          aria-label="Semester name"
          type="text"
          name="name"
          defaultValue={semester.name}
        />
      </p>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={semester.avatar ? semester.avatar : "https://placekitten.com/g/200/200"}
        />
      </label>
      <label>
        <span>Description</span>
        <textarea
          name="description"
          defaultValue={semester.description}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
}
