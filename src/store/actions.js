import axios from 'axios';

export const actions = {
        fetchArticles({commit}){
            axios.get('http://localhost:80/admin-system/api/fishlist')
            .then((response)=>{
              console.log(response.data);
            commit('fetchArticles', response.data);
            })
            .catch((err)=>{
              console.log('error', err);
            });
        }

}