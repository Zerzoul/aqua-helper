<template>
<v-carousel-item :src="getUrl" />
</template>
<script>

export default {
    name: 'HeaderSliderItem',
    props: ['image'],

    data:() => ({
         url: 'http://localhost:80/admin-system/api/image_entity/',
    }),
    computed:{
        getUrl(){
            console.log(this.image);
            const url =  this.url + this.image;
            return url;
        }
    }

};
</script>