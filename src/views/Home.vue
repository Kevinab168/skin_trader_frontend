<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState(['username', 'token'])
  },
  methods: {
  }

}
</script>
