<template>
<ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Logut</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-content>
            <ion-button @click="logout">Logout</ion-button>
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
    IonButton
} from '@ionic/vue';

import store from '@/store';

export default ({
    name: 'Logout',
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
        IonButton
    },
    methods: {
      async logout() {
        await store.set('token', null)
        const oldUser = await store.get('user')
        await store.set('user', null)
        this.emitter.emit('logout',oldUser)
        this.$router.push('/user')
      }
    }
})
</script>
