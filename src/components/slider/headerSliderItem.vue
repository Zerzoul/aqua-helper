<template>
<v-carousel-item :src="getUrl" />
</template>
<script>

export default {
    name: 'HeaderSliderItem',
    props: ['image'],

    computed:{
        getUrl(){
            const url = this.$store.state.url_image;
            console.log(this.image);
            return url + this.image;
        }
    }
};
</script>