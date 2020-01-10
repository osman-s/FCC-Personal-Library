import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl;

export function bookPost({ title }) {
  return http.post(apiEndpoint, {
    title: title
  });
}
export function bookComment({ _id, comment }) {
  return http.post(apiEndpoint, {
    _id: _id,
    comment: comment
  });
}

export function issueDelete({ _id }) {
  console.log(_id);
  return http.delete(apiEndpoint, {
    data: { _id: _id }
  });
}
export function getBooks() {
  return http.get(apiEndpoint);
}
