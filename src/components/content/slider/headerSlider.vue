<template>
<v-carousel
    hide-delimiters
    cycle
    :interval="5000"
    :height="carouselHeightSizeParams">
    <header-slider-item 
    v-for="(image, index) in getImages()"
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
    methods:{
         getImages(){
            const imagesUrl = this.$store.getters.getImageName;
            return imagesUrl;
        }
    },
    computed:{
        carouselHeightSizeParams(){
            return this.$vuetify.breakpoint.smAndDown ? 250 : 500;
        }
    }

    
};
</script>