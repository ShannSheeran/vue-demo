import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

//coming-soon movies



let get=(page, pageSize)=>{
  let url = `api/movie/coming_soon?start=${page}&count=${pageSize}`
  return new Promise((resolve, reject)=> {
    Vue.axios.get(url)
      .then(response => {
        resolve(response.data);
      })
  })
}

let getMovieDetail = (id)=>{
  let url = `api/movie/subject/${id}`;
  return new Promise((resolve, reject)=> {
    Vue.axios.get(url)
      .then(response => {
        resolve(response.data);
      })
  })

}

let searchMovie = (query, start, size)=>{
  let url = `api/movie/search?q=${query}&start=${start}&count=${size}`;
  return new Promise((resolve, reject)=> {
    Vue.axios.get(url)
      .then(response => {
        resolve(response.data);
      })
  })
}

export {get, getMovieDetail, searchMovie}


