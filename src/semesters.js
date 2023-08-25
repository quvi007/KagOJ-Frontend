// import localforage from "localforage";
// import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import axios from "axios";

export async function getSemesters(query) {
  const res = await axios.get('http://localhost:3000/semesters');
  const semesters = res.data;
  const retData = semesters.sort(sortBy("name"));
  return retData;
  // await fakeNetwork(`getSemesters:${query}`);
  // let semesters = await localforage.getItem("semesters");
  // if (!semesters) semesters = [];
  // if (query) {
  //   semesters = matchSorter(semesters, query, { keys: ["name"] });
  // }
  // const retData = semesters.sort(sortBy("name", "createdAt"));
  // console.log(retData);
  // return retData;
}

export async function createSemester() {
  let id = Math.random().toString(36).substring(2, 9);
  let semester = { id: id, name: '', avatar: '', description: '' };
  const res = await axios.post('http://localhost:3000/semesters', semester);
  return res.data;

  // let id = Math.random().toString(36).substring(2, 9);
  // let semester = { id, createdAt: Date.now() };
  // let semesters = await getSemesters();
  // semesters.unshift(semester);
  // await set(semesters);
  // return semester;
}

export async function getSemester(id) {
  const res = await axios.get(`http://localhost:3000/semesters/${id}`);
  const semester = res.data;
  return semester ?? null;
  // await fakeNetwork(`semester:${id}`);
  // let semesters = await localforage.getItem("semesters");
  // let semester = semesters.find(semester => semester.id === id);
  // return semester ?? null;
}

export async function updateSemester(id, updates) {
  const res = await axios.put(`http://localhost:3000/semesters/${id}`, updates);
  return res.data ?? null;

  // await fakeNetwork();
  // let semesters = await localforage.getItem("semesters"); 
  // let semester = semesters.find(semester => semester.id === id);
  // if (!semester) throw new Error("No semester found for", id);
  // Object.assign(semester, updates);
  // await set(semesters);
  // return semester;
}

export async function deleteSemester(id) {
  const res = await axios.delete(`http://localhost:3000/semesters/${id}`);
  return res.data;

  // console.log(id);
  // let semesters = await localforage.getItem("semesters");
  // let index = semesters.findIndex(semester => semester.id === id);
  // if (index > -1) {
  //   semesters.splice(index, 1);
  //   await set(semesters);
  //   return true;
  // }
  // return false;
}

// function set(semesters) {
//   return localforage.setItem("semesters", semesters);
// }

// // fake a cache so we don't slow down stuff we've already seen
// let fakeCache = {};

// async function fakeNetwork(key) {
//   if (!key) {
//     fakeCache = {};
//   }

//   if (fakeCache[key]) {
//     return;
//   }

//   fakeCache[key] = true;
//   return new Promise(res => {
//     // setTimeout(res, Math.random() * 800);
//     setTimeout(res, Math.random() * 0);
//   });
// }
