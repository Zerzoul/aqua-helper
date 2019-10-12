<template>
<div>
<v-carousel-item :src="getUrl" />
</div>

</template>
<script>

export default {
    name: 'HeaderSliderItem',
    prosp:{
        image:{
            type: String,
            required: true
        }
    },
    data:() => ({
         url: 'http://localhost:80/admin-system/api/image_entity/',
    }),
    computed:{
        getUrl(){
            const url =  this.url + this.image;
            console.log(this.image);
            return url;
        }
    }

};
</script>