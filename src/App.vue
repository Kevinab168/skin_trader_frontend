<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link 
        to="/"
        data-test="home-link"
        >Home</router-link> |
        <router-link 
        v-if="username" 
        to="/about" data-test="userLoginStatus"
        >{{ username }}</router-link> | 
        <router-link 
        v-if="!username" 
        to="/accounts/signup"
        data-test="register-link"
        >Register</router-link> |
        <router-link 
        v-if="!username" 
        to="/accounts/login"
        data-test="login-link" 
        >Login</router-link> | 
        <router-link 
        v-if="username" 
        to="/accounts/logout" data-test="logout" 
        >Logout</router-link>
      </div>
      <router-view/>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Root',
  computed: {
    ...mapState(['username'])
  },
  created: function() {
    const credentials = JSON.parse(localStorage.getItem('credentials'))
    if (credentials) {
      this.$store.commit(
        'setUser', credentials
      )
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
