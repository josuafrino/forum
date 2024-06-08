import axios from "axios";

export function getForum() {
  return axios({
    method: "get",
    url: "http://localhost:2000/forum",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data);
}

export function getForumById(id) {
  return axios({
    method: "get",
    url: `http://localhost:2000/forum/${id}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data);
}

export function createForum(data) {
  return axios({
    method: "post",
    url: "http://localhost:2000/forum",
    headers: { "Content-Type": "application/json" },
    data,
  }).then((response) => response.data);
}

export function updateForum(id, data) {
  return axios({
    method: "put",
    url: `http://localhost:2000/forum/${id}`,
    headers: { "Content-Type": "application/json" },
    data,
  }).then((response) => response.data);
}

export function deleteForum(id) {
  return axios({
    method: "delete",
    url: `http://localhost:2000/forum/${id}`,
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.data);
}
