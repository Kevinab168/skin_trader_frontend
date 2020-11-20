<template>
    <v-container
    fluid
    fill-height
    >
        <v-row
        >
        <v-col
        class="d-flex justify-center"
        >
           <v-card 
           hover
           color="#9B5AA5"
           lazy-validation
           >
           <v-card-title
           class="white--text justify-center green lighten-1"
           >
          
           <span class="title">
            <v-icon dark left>mdi-account</v-icon>
            Register
            </span>
           
           </v-card-title>
           <v-card-text
           class="pa-10"
           >
               <v-form
               ref="form"
               lazy-validation
               >
                   <v-text-field
                   v-model="username"
                   label="Username"
                   prepend-icon="mdi-account"
                   clearable
                   outlined
                   solo
                   dense
                   color="white"
                   :rules="requiredRules"
                   data-test="username"                   
                   >
                   </v-text-field>
                   <v-text-field
                   v-model="password"
                   prepend-icon="mdi-lock"
                   type="password"
                   label="Password"
                   clearable
                   outlined
                   solo
                   dense
                   color="white"
                   :rules="requiredRules"
                   data-test="password"             
                   >
                   </v-text-field>
                   <v-text-field
                   v-model="firstName"
                   prepend-icon="mdi-format-letter-case"
                   label="First Name"
                   clearable
                   outlined
                   solo
                   dense
                   color="white"
                   :rules="requiredRules" 
                   data-test="first-name"
                   >
                   </v-text-field>
                   <v-text-field
                   v-model="lastName"
                   prepend-icon="mdi-format-letter-case"
                   label="Last Name"
                   clearable
                   outlined
                   solo
                   dense
                   color="white"
                   :rules="requiredRules"
                   data-test="last-name" 
                   >
                   </v-text-field>
                   <v-btn
                   dark
                   color="#71C373"
                   @click="registerUser"
                   data-test="submit-btn"
                   >Sign Up</v-btn>
               </v-form>
           </v-card-text>

           </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>


export default {
    name: 'RegistrationForm',
    components: {

    },
    data: () => ({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        requiredRules: [
            v => !!v || 'Please enter a value'
        ]
    }),
    methods: {
        async registerUser() {
                if (this.$refs.form.validate()) {
                    const res = await this.$http.post('/users/', {
                    username: this.username,
                    password: this.password,
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email
                })
                if (res.status == 201) {
                    this.$router.push({ path: '/'})
                }
            }
        },
    }
}
</script>