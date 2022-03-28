<template>
<div>
One event card
{{item.id}}
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { OneEvent } from "@/types"

@Component
export default class EventCard extends Vue {  
    @Prop()
    item!:OneEvent;

}
</script>
</script>