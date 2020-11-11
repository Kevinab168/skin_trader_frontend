<template>
  <div>
      <h1>Login</h1>
      <v-container>
        <v-row
        align-content="center"
        justify="center"
        ><v-col>
          <LoginForm></LoginForm>
        </v-col>        
        </v-row>
      </v-container>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
  }
}
</script>

