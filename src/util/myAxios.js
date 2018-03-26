import Vue from 'vue'
import myaxios from './base'
import allApi from './allApi'

var xhr = {
    get:function (url,params) {
        return myaxios.get(allApi[url],{params})
    },
    post:function (url,data) {
        return myaxios.post(allApi[url],data)
    }
};
Vue.prototype.$axios=xhr;