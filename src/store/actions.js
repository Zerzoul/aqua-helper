import axios from '../axios';

export const actions = {
        async fetchFishes({commit}){
            await axios.get('/fishlist')
            .then(async (response)=>{
              console.log('fishlist', response.data);
            await commit('fetchFishes', response.data);
            })
            .catch((err)=>{
              console.log('error', err);
            });
        },
        async fetchBillets({commit}){
          await axios.get('/posts')
          .then(async (response)=>{
            console.log('billets', response.data);
          await commit('fetchBillets', response.data);
          })
          .catch((err)=>{
            console.log('error', err);
          });
      },
      async fetchComments({commit}){
        await axios.get('/comments')
        .then(async (response)=>{
        await commit('fetchComments', response.data);
        })
        .catch((err)=>{
          console.log('error', err);
        });
    },
    addComment({commit}, comment){
      commit("addComment", comment);
    }

}