export const mutations = {
    fetchArticles(state, data){
        console.log(state);
        state.articles = data;
    }
}