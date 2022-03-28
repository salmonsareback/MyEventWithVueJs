<template>
  <v-card dark :color="cardColor()" >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h6" v-text="item.title"></v-card-title>

        <v-card-subtitle v-text="item.bands.join(', ')"></v-card-subtitle>

        <v-rating
          length="5"
          :value="item.nbStars"
          hover
          color="white"
          size="20"
        ></v-rating>
        <v-textarea class="mx-2"
          dark
          hint="Ajouter un commentaire"
          background-color="white"
          color="#456465"
          dense
          persistent-hint
          rows="2"
        ></v-textarea>
        <v-card-actions>
          <v-btn class="ml-2 mt-3" fab icon height="20px" right width="20px">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="item.imgUrl"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { OneEvent } from "@/types";

@Component
export default class EventCard extends Vue {
  @Prop()
  item!: OneEvent;

  private cardColor(): String {
    let debug5 =
      "#" +
      this.randomHex(50, 130) +
      this.randomHex(50, 95) +
      this.randomHex(90, 120);

    console.log(debug5);
    return debug5;
  }

  private randomHex(minVal: number, maxVal: number): string {
    return Math.floor(Math.random() * (maxVal - minVal) + minVal).toString(16);
  }
}
</script>
</script>