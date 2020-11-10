<template>
    <div>
        <h1>Register</h1>
        <v-container>
          <v-row
          align="center"
          justify="center"
          >
            <v-col

            >
              <RegistrationForm></RegistrationForm>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>

<script>
// @ is an alias to /src
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  name: 'Registration',
  components: {
    RegistrationForm
  }
}
</script>

