<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import './assets/css/general.scss'
import Navbar from './views/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
/* font */
@font-face {
  font-family: "cabin-regular";
  src: local("cabin-regular"),
   url(./assets/font/cabin/Cabin-Regular.ttf) format("truetype");
}
/* end font */

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'cabin-regular';
  padding: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
