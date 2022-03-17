<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>User Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>    
      <div id="container">
          <h1>{{this.user && this.user.name}}</h1>
            <ion-avatar slot="start">
              <img :src="this.user.profile_photo_url">
            </ion-avatar>    
            <ion-list>
              <ion-item>
                <ion-label>Email: {{this.user && this.user.email}}</ion-label>
              </ion-item>
              <ion-item>
                <ion-button @click="refresh">Refresh</ion-button>
              </ion-item>
            </ion-list>        
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import{
    IonButtons,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    toastController,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonAvatar
} from '@ionic/vue';

import store from '../store';

export default {
    name: 'login',
    components: {
        IonButtons,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonMenuButton,
        IonList,
        IonItem,
        IonButton,
        IonLabel,
        IonAvatar
    },
    data(){
      return {
        user: {}
      }
    },
    async mounted (){
      this.user = await store.get('user')
      console.log(await store.get('user'))
    },
    methods: {
      async refresh(){
        try {
          await store.set('user', await this.casteaching.user())
          console.log(await this.casteaching.user())
          this.user = await store.get('user')
        } catch (error) {
          console.log(error);

        const toast = await toastController.create({
            color: 'dark',
            duration: 2000,
            message: "Ha hagut un problema al refrescar les dades del usuari",
            showCloseButton: true,
          });

          await toast.present();
        }
      }
    }
}
</script>

<style scoped>
#container{
  margin-left: 2cm;
}
</style>