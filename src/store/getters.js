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
        console.log(state);
        let comments;
        for(let i = 0; state.comments.length > i; i++ ){
            const commentId = state.comments[i].post_id;
            if(commentId === id){
                comments = state.comments[i];
            }
        }
        return comments;
    }
}