<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center hidden-sm-and-down">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span class="appTittle">My Event</span>
      </div>

      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'home' }">Home</v-btn>
      <v-btn text :to="{ name: 'search-events' }">Find by</v-btn>
      <v-btn text :to="{ name: 'events' }">Manage</v-btn>

      <v-spacer></v-spacer>
      <v-btn
        v-for="lang in languages"
        :key="lang.title"
        @click="changeLocale(lang.language)"
        color="transparent"
        :depressed="!($i18n.locale == lang.language)"
      >
        <flag :iso="lang.flag" size="normal" />
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/plugins/i18n";

export default Vue.extend({
  name: "App",
  // private languages = [
  // { local: "en", lang: "English", flag: "gb" },
  // { local: "fr", lang: "Français", flag: "fr" },
  // ];

  data: () => ({
    languages: [
      { flag: "fr", language: "fr", title: "Français" },
      { flag: "gb", language: "en", title: "English" },
    ],
  }),
  methods: {
    changeLocale(locale: string) {
      i18n.locale = locale;
    },
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lobster|Open+Sans+Condensed:300|Roboto:500");
</style>
<style scoped>
.appTittle {
  font-family: "Lobster", cursive;
  font-size: 30px;
}
</style>
