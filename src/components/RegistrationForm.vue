<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <v-form
        @submit.prevent="handleSubmit(registerUser)"
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
                    <ValidationProvider rules="required" v-slot="{ errors }">
                        <v-text-field
                        v-model="email"
                        data-test="email"
                        flat
                        label="Email"
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
                        v-model="firstName"
                        data-test="first-name"
                        flat
                        label="First Name"
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
                        v-model="lastName"
                        data-test="last-name"
                        flat
                        label="Last Name"
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
                    data-test="submit-btn"
                    type="submit"
                    block
                    dark
                    color="#58A5A7"
                    >Sign up</v-btn>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
    </ValidationObserver>
</template>


<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
    name: 'RegistrationForm',
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data: () => ({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    }),
    methods: {
        async registerUser() {
            const res = await this.$http.post('/users/', {
                username: this.username,
                password: this.password,
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email
            })
            if (res.status == 201) {
                // router push to the home page
                this.$router.push({ path: '/'})
            }
        },
    }
}
</script>