import axios from 'axios';

export const actions = {
        fetchFishes({commit}){
            axios.get('http://localhost:80/admin-system/api/fishlist')
            .then((response)=>{
            commit('fetchFishes', response.data);
            })
            .catch((err)=>{
              console.log('error', err);
            });
        }

}