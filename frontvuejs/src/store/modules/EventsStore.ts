import EventService from "@/services/EventService";
import { OneEvent } from "@/types";
import { createModule, mutation, action } from "vuex-class-component";

const VuexModule = createModule({ namespaced: "events", strict: false });
export class EventsStore extends VuexModule {
  public items: Array<OneEvent> = [];

  @action
  public async GET_EVENTS(): Promise<void> {
    this.items=await EventService.getEvents();
  }

}