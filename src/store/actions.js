import axios from 'axios';

export const actions = {
         fetchFishes({commit}){
            axios.get('http://zerzoul.com/admin-system/api/fishlist')
            .then(async (response)=>{
            await commit('fetchFishes', response.data);
            })
            .catch((err)=>{
              console.log('error', err);
            });
        },
         fetchBillets({commit}){
          axios.get('http://zerzoul.com/admin-system/api/posts')
          .then(async (response)=>{
          await commit('fetchBillets', response.data);
          })
          .catch((err)=>{
            console.log('error', err);
          });
      }

}