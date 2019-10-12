export const mutations = {
    fetchFishes(state, data){
        state.fishesListe = data;
    },
    fetchBillets(state, data){
        state.billets = data;
    }
}