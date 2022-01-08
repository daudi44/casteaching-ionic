<template>
  <ion-content>
    <ion-refresher slot="fixed" @ion-Refresh="refresh" id="refresher">
      <ion-refresher-content></ion-refresher-content>
    </ion-refresher>
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
    <ion-list id="skeleton" v-if="loading">
      <ion-list-header>
        <ion-skeleton-text animated style="width: 80px"></ion-skeleton-text>
      </ion-list-header>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="start">
          <ion-skeleton-text></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
          </p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import casteaching from "@acacha/casteaching";
import {
  IonAvatar,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRefresher,
  IonRefresherContent, IonSkeletonText
} from "@ionic/vue";

export default {
  name: "Videos",
  data(){
    return{
      videos:[],
      loading: true
    }
  },
  components: {
    IonList,
    IonItem,
    IonListHeader,
    IonAvatar,
    IonLabel,
    IonRefresher,
    IonRefresherContent,
    IonContent,
    IonSkeletonText
  },
  methods:{
    async refresh(){
      this.fetchVideos()
      this.refresher.complete()
    },
    async fetchVideos(){
      this.videos = await casteaching.videos()
    }
  },
  async created() {
    this.fetchVideos()
    this.loading = false
  },
  mounted() {
    this.refresher = document.getElementById('refresher')
  }
}
</script>

<style scoped>

</style>