import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

//coming-soon movies

const api = 'api/movie/coming_soon?start=0&count=9';

let get=(url)=>{
  return new Promise((resolve, reject)=> {
    Vue.axios.get(url)
      .then(response => {
        resolve(response.data);
      })
  })
}

export {get, api}


