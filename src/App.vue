<template>
  <div id="app">
  <NavigationBar />
  <router-link to="/text" style="text-decoration: none; color: #000; ">{{ email }}</router-link>
  <router-view />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
  },
  data () {
    return {
  
    }
  },
  mounted() {
    
  }, 
  methods: {

    }

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

body {
  position: relative;
  display: flex;
  justify-content: center;
}

#app {
  width: 1200px;
  height: 1400px;
}

@media screen and (max-width: 1230px) {
  #app {
    width: 800px;
  }
}

@media screen and (max-width: 830px) {
  #app {
    width: 730px;
  }
}

@media screen and (max-width: 750px) {
  #app {
    width: 570px;
  }
}

@media screen and (max-width: 600px) {
  #app {
    width: 400px;
  }
}

@media screen and (max-width: 425px) {
  #app {
    width: 350px;
  }
}

</style>
