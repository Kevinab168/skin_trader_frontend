<template>
  <v-app>
    <div id="app">

       <v-card class="overflow-hidden">
        <v-app-bar
          absolute
          color="white"
          elevate-on-scroll
          scroll-target="#scrolling-techniques-7"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Xchange Place</v-toolbar-title>

          <v-spacer></v-spacer>

          <router-link
            to="/"
            data-test="home-link"
          > <v-btn icon>
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </router-link>
         
         <router-link
        
          to='/about'
          data-test="userLoginStatus"
         >
          <v-btn icon>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
         </router-link>

         <router-link
          v-if="!username"
          to="/accounts/signup"
          data-test="register-link"
         >
           <v-btn icon>
            <v-icon>mdi-account</v-icon>
          </v-btn>
         </router-link>

         <router-link
          v-if="!username"
          to="/accounts/login"
          data-test="login-link"
         >
          <v-btn icon>
            <v-icon>mdi-login</v-icon>
          </v-btn>
         </router-link>

         <router-link
          v-if="username"
          to="/accounts/logout"
          data-test="logout"
         >
          <v-btn icon>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
         </router-link>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 70px;">
          </v-container>
        </v-sheet>
      </v-card>
    </div>
    <div class="content">
        <router-view/>
    </div>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Root',
  components: {
    
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {

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

a {
  text-decoration: none;
}
</style>
