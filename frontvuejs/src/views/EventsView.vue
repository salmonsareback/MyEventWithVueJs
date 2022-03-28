<template>
  <v-row>
    <v-col v-for="oneEvent in events()" :key="oneEvent.id" xs="12" md="6" lg="4" xl="3" class="d-flex flex-wrap align-self-strech justify-space-around">
      <event-card :item="oneEvent" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// Import store proxy
import { vuex } from "@/store";
import EventCard from "@/components/OneEventCard.vue";

@Component({ components: { EventCard } })
export default class EventsView extends Vue {
  created() {
    // Fetch events from database
    vuex.events.GET_EVENTS();
  }
  private events() {
    return vuex.events.items;
  }
}
</script>

<style>
</style>