<template>
  <v-row>
    <v-col v-for="oneEvent in events()" :key="oneEvent.id" cols="4">
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