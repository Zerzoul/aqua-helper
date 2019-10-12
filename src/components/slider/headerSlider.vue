<template>
<v-carousel>
    <header-slider-item 
        v-for="(image, index) in getImages"
        :key="index"
        :image="image"
    />
</v-carousel>
</template>
<script>
import HeaderSliderItem from './headerSliderItem'
export default {
    name: 'HeaderSlider',
    components:{
        HeaderSliderItem,
    },
    data: () => ({
        images: [],
    }),
    methods:{
        getImages(){
            const imagesUrl = this.$store.getters.getImageName;
            this.images = imagesUrl;
            console.log(this.images);
        }
    },
    
};
</script>