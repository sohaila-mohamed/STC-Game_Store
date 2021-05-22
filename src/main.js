import { createApp } from 'vue';
import App from './App';
import router from './Routers/index';
import { store } from './Store';

import 'bootstrap/dist/css/bootstrap.css';


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');