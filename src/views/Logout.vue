<template>
  <h1 data-test="logoutMsg">You have successfully logged out!</h1>
</template>

<script>
export default {
    name: 'Logout',
    created: function() {
        console.log('Hello')
        localStorage.clear()
        this.$store.commit('resetUser')
    }
}
</script>

<style>

</style>