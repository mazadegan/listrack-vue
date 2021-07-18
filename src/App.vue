<template>
    <div class="w-full h-screen">
        <!--
        <Navbar></Navbar>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        -->
        <router-view/>
    </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue';

export default {
    components: {
        //Navbar,
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap');
#app {
      font-family: Poppins;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }

#nav {
      padding: 30px;
    }

#nav a {
      font-weight: bold;
      color: #2c3e50;
    }

#nav a.router-link-exact-active {
      color: #42b983;
    }
</style>
