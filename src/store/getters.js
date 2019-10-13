export const getters = {
    getImageName(state){
        const images = state.fishesListe.map( fish => fish.file_id );
        return images;
    },
    getBillets(state){
        const billets = state.billets;
        return billets;
    },
    getSelectedBillet: (state) => (id) => {
        const thisBillet = state.billets.map(billet => {
            if(billet.id === id){
                return billet;
            }
        });
        return thisBillet;
    }
}