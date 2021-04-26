import { createApp } from 'vue'
import App from './App.vue'
import GenericModal from './components/GenericModal.vue'


const app = createApp(App)

//import GenericModal to use everywhere in the app
app.component('generic-modal', GenericModal)

app.mount('#app')
