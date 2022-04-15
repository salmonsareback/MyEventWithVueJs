import HTTP from "./http-common";
import { OneEvent } from "@/types";

class EventService {
  async getEvents(): Promise<Array<OneEvent>> {
    return await HTTP.get("/events/").then((resp) => resp.data);
  }
}

export default new EventService();