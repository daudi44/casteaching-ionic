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
    IonButton
} from '@ionic/vue';

import {Device} from '@capacitor/device';
//import casteaching from '@acacha/casteaching';
import axios from 'axios';
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
      async login(){
        const info = await Device.getInfo();
        let token = null
        const device_name = (info && info.model) || 'TokenCasteachingIonic'
        /* try{
          token = casteaching.login(this.email,this.password,device_name);
        }catch(error){
          console.log(error)
        } */

        const apiClient = axios.create({
          baseURL: 'https://casteaching.danielaudibielsa.codes/api',
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })
        const postData = {
          email: this.email,
          password: this.password,
          device_name: device_name
        }
        let response = null        
        let response2 = null    
        try {
          response = await apiClient.post('/sanctum/token', postData)
        } catch (error) {
          console.log(error)
        }
        token = response.data

        const axiosClient = axios.create({
          baseURL: 'https://casteaching.danielaudibielsa.codes/api',
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        })

        console.log("si")
        console.log(postData)
        try{
          response2 = await axiosClient.get('/user', postData)
        }catch(error){
          console.log(error)
        }
        console.log(response2)
        const user = response2.data
        console.log(user)

        store.set('token', token)
        store.set('user', user)
        console.log(store.user)

        let path = '/user'
        if(this.$route.params && this.$route.params.wantedRoute) path = this.$route.params.wantedRoute
        this.$router.push({ path })        

      }
    }
}
</script>