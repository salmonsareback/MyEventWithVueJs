import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { OneEvent} from "@/types";

const HTTP: AxiosInstance = axios.create({
  // baseURL: process.env.NODE_ENV !== "production" ? "http://localhost:8089" : "",
  baseURL: "/api",
});

export async function getEvents(): Promise<Array<OneEvent>> {
  return await HTTP.get("/events/").then((resp) => resp.data);
}