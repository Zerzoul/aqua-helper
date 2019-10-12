export const getters = {
    getImageName(state){
        const images = state.fishesListe.map( fish => fish.file_id );
        return images;
    }
}