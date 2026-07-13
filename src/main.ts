import { createApp } from 'vue'

// @ts-ignore: Vue single-file component without declaration
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
