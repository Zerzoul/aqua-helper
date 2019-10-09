<template>
  <v-container>
    <v-layout>
     Start a new blog 
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
  }),
  created(){
      axios.get('http://localhost:80/admin-system/api/posts')
      .then((response)=>{
        console.log(response.data);
      })
      .catch((err)=>{
        console.log('error', err);
      });
  methods:{
    
    }
  }
};
</script>
