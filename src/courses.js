import sortBy from "sort-by";

import axios from "axios";

export async function getCourses(semesterId) {
    const res = await axios.get('http://localhost:3000/courses');
    const courses = res.data;
    const filteredCourses = [];
    courses.forEach((course) => {
      if (course.semesterId === semesterId) {
        filteredCourses.unshift(course);
      }
    })
    const retData = filteredCourses.sort(sortBy("name"));
    return retData;
}

export async function createCourse(course, semesterId) {
  let id = Math.random().toString(36).substring(2, 9);
  course = { ...course, id: id, semesterId: semesterId };
  const res = await axios.post('http://localhost:3000/courses', course);
  return res.data;
}

export async function getCourse(id) {
  const res = await axios.get(`http://localhost:3000/courses/${id}`);
  const course = res.data;
  return course ?? null;
}

export async function updateCourse(id, semesterId, updates) {
  updates = {...updates, semesterId: semesterId};
  const res = await axios.put(`http://localhost:3000/courses/${id}`, updates);
  return res.data ?? null;
}

export async function deleteCourse(id) {
  const res = await axios.delete(`http://localhost:3000/courses/${id}`);
  return res.data;
}