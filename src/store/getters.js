export const getters = {
    getImageName(state){
        const images = state.fishesListe.map( fish => fish.file_id );
        return images;
    },
    getBillets(state){
        const billets = state.billets;
        return billets;
    },
    getFishes: state => {
        return state.fishes;
        return fishes;
    },
    getSelectedBillet: (state) => (id) => {
        console.log(id,state.billets);
        let thisBillet;
        for(let i = 0; state.billets.length > i; i++ ){
            const billetId = state.billets[i].id;
            if(billetId === id){
                thisBillet = state.billets[i];
            }
        }
        return thisBillet;
    }
}