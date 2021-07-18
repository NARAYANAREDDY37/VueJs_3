import { createApp } from 'vue';
import App from './App.vue';
// imported the componet globally
import SinglePost from './components/SinglePost.vue';

const app = createApp(App);
// regiested the component globally
app.component('SinglePost', SinglePost);

app.mount('#app');
