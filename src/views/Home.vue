<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="getDB">jdldjw</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'
const url = '/api/hero';
export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    getDB: function() {
      axios.get(url).then(function(res) {
        console.log(res);
      });
    },
  },
};
</script>
