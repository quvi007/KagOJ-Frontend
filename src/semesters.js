import sortBy from "sort-by";

import axios from "axios";

export async function getSemesters(query) {
  const res = await axios.get('http://localhost:3000/semesters');
  const semesters = res.data;
  const retData = semesters.sort(sortBy("name"));
  return retData;
}

export async function createSemester(semester) {
  let id = Math.random().toString(36).substring(2, 9);
  semester = { ...semester, id: id};
  const res = await axios.post('http://localhost:3000/semesters', semester);
  return res.data;
}

export async function getSemester(id) {
  const res = await axios.get(`http://localhost:3000/semesters/${id}`);
  const semester = res.data;
  return semester ?? null;
}

export async function updateSemester(id, updates) {
  const res = await axios.put(`http://localhost:3000/semesters/${id}`, updates);
  return res.data ?? null;
}

export async function deleteSemester(id) {
  const res = await axios.delete(`http://localhost:3000/semesters/${id}`);
  return res.data;
}