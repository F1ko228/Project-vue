import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import BasketProduct from './pages/BasketProduct.vue';
import PlacedOrders from './pages/PlacedOrders.vue';
import AutoClient from './pages/AutoClient.vue';
import RegClient from './pages/RegClient.vue';

const app = createApp(App);
const routes = [
    { path: '/Catalog', component: MainPage, alias: '/'  },
    { path: '/Basket', component: BasketProduct,  },
    { path: '/Orders', component: PlacedOrders,  },
    { path: '/Authorization', component: AutoClient,  },
    { path: '/Registration', component: RegClient,  },
  ]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for routes: routes
  })
  app.use(router) 
app.mount('#app');


