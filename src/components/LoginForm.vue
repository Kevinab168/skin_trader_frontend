<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <v-form
        @submit.prevent="handleSubmit()"
        >
            <v-container
            fluid
            >
            <v-row
            >
                <v-col
                >
                <ValidationProvider rules="required" v-slot="{ errors }">
                <v-text-field
                v-model="username"
                data-test="username"
                flat
                label="User Name"
                filled
                dense
                clearable
                ></v-text-field>
                <p class="red--text" align="left">{{ errors[0] }}</p>
                </ValidationProvider>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <v-text-field
                        v-model="password"
                        data-test="password"
                        flat
                        label="Password"
                        type="password"
                        filled
                        dense
                        clearable
                        ></v-text-field>
                        <p class="red--text" align="left">{{ errors[0] }}</p>
                    </ValidationProvider>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                    data-test="loginBtn"
                    type="submit"
                    block
                    dark
                    color="#A75A58"
                    >Log In</v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
    </ValidationObserver>
</template>


<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
    name: 'LoginForm',
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data: () => ({
        username: '',
        password: '',
    }),
    methods: {
        loginUser() {
            // This method will log the user and set the information in Vuex. 
        }
    }
}
</script>