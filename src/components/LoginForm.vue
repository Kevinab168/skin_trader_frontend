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
           color="#71C373"
           shaped
           >
           <v-card-title
           class="justify-center purple lighten-1"
           >
           <span class="title white--text">
               <v-icon dark left>mdi-login</v-icon>
               Login
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
                   required 
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
                   required
                   :rules="requiredRules"
                   data-test="password"
                   >
                   </v-text-field>
                   <v-btn
                   dark
                   color="#9B5AA5"
                   @click="loginUser"
                   data-test="loginBtn"
                   >Login</v-btn>
               </v-form>
           </v-card-text>

           </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>


<script>

export default {
    name: 'LoginForm',
    components: {
    },
    data: () => ({
        username: '',
        password: '',
        requiredRules: [
            v => !!v || 'Please enter a value',
        ],
    }),
    methods: {
        async loginUser() {
            if (this.$refs.form.validate()) {
                const res = await this.$http.post('/token-auth/', {
                    username: this.username,
                    password: this.password,
                })
                if (res.status == 200) {
                    const token = res.data.token
                    const username = this.username
                    localStorage.setItem('credentials', JSON.stringify({
                        'username': username,
                        'token': token,
                    }))
                    this.$store.commit('setUser', {username, token})
                    this.$router.push('/')
                }
            }
        }
    }
}
</script>