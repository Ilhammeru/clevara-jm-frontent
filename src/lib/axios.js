import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'

var jwt = localStorage.getItem('jwt')
if (jwt != null) {
    console.log('interceptor', jwt)
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        var jwt = localStorage.getItem('jwt')
        if (jwt != null || jwt != undefined) {
            config.headers.Authorization = 'Bearer ' + jwt
            return config;
        }
        
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      })
}

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.headers.common['Allow-Control-Allow-Origin'] = '*'
Vue.use(VueAxios, axios)