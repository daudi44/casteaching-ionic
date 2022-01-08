<template>
  <ion-list>
    <ion-list-header>
      Llistat de Videos
    </ion-list-header>

    <ion-item v-for="video in videos" :key="video.id">
      <ion-avatar slot="start">
        <img src="https://via.placeholder.com/80">
      </ion-avatar>
      <ion-label>
        <h2>{{ video.title }}</h2>
        <p>{{ video.description }}</p>
      </ion-label>
    </ion-item>

  </ion-list>
</template>

<script>
import casteaching from "@acacha/casteaching";
import {IonAvatar, IonItem, IonLabel, IonList, IonListHeader} from "@ionic/vue";

export default {
  name: "Videos",
  data(){
    return{
      videos:[]
    }
  },
  components: {
    IonList,
    IonItem,
    IonListHeader,
    IonAvatar,
    IonLabel
  },
  async created() {
    this.videos = await casteaching.videos()
  }
}
</script>

<style scoped>

</style>