export const getters = {
    // Fetch fishes' image from fishList
    getImageName(state){
        const images = state.fishesListe.map( fish => fish.file_id );
        return images;
    },

        // Fetch the billets who has this id 
    getSelectedBillet: (state) => (id) => {
        let thisBillet;
        for(let i = 0; state.billets.length > i; i++ ){
            const billetId = state.billets[i].id;
            if(billetId === id){
                thisBillet = state.billets[i];
            }
        }
        return thisBillet;
    },
    // Fetch all the comments who has been attached to the article id.
    getComment: (state) => (id) => {
        const comment = state.comments.filter(comment =>{
            if(comment.postId === id){
                return true;
            }
        });
        return comment;
    },
    // return if the user is connected or not
    isAuthenticated(state){
        return state.token !== null ? true : false;
    }
}