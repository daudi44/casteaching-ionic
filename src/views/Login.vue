<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Video {{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Contrasenya</ion-label>
            <ion-input v-model="password" type="password"></ion-input>
          </ion-item>

          <ion-button @click="login">Login</ion-button>
        </ion-card-content>
      </ion-card>

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
    IonCard,
    IonCardContent,
    IonLabel,
    IonItem,
    IonInput,
    IonButton,
    toastController
} from '@ionic/vue';

import {Device} from '@capacitor/device';
import store from '@/store';

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
        IonCard,
        IonCardContent,
        IonLabel,
        IonItem,
        IonInput,
        IonButton
    },
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
    async login() {
      const info = await Device.getInfo();
      let token = null
      const device_name = (info && info.name) || 'TokenGeneric'
      try {
         token = await this.casteaching.login(this.email,this.password,device_name)
         this.casteaching.setToken(token)
      } catch (error) {
         console.log(error);
      }
      let user
      try {
        user = await this.casteaching.user()
      } catch (error) {
        console.log(error);

       const toast = await toastController.create({
          color: 'dark',
          duration: 2000,
          message: "Atenció, has introduït un usuari i/o contrasenya incorrectes",
          showCloseButton: true,
        });

        await toast.present();
      }
      await store.set('token', token)
      await store.set('user', user)
      this.emitter.emit('login',user)
      let path = '/user'
      if(this.$route.params && this.$route.params.wantedRoute) path = this.$route.params.wantedRoute
      this.$router.push({ path })
      }
    }
}
</script>