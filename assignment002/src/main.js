import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.component('assignment', Home);

new Vue({
    el: '#app',
    render: h => h(App)
})
