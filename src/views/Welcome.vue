<template>
    <div>
        <div
         class="welcome-content"
        >
            <v-img
             data-test="welcome-message-image"
             src="@/assets/welcomeMessage.jpg"
             max-height="300"
            >
            <h1
             data-test="welcome-message"
             class="d-flex justify-start ml-8 mt-10  white--text"
            >Xchange Place</h1>
            <span
             data-test="welcome-message-subtitle"
             class="d-flex justify-start ml-8 white--text"
            >Buy and sell items across several games</span>
            <v-btn
             data-test="welcome-signup"
             class="d-flex justify-start ml-8 mt-4"
             color="#1485EB"
             dark
             @click="pushToRegistrationPage" 
            >
                Sign up
            </v-btn>
            </v-img>
        </div>
        <div
         data-test="service-description"
         class="information-cards"
        >
            <v-container>
                <v-row
                >
                    <v-col>
                        <v-card
                         hover
                         height="250"
                        >
                          <v-icon
                           large
                           color="#1B88E4"
                           class="d-flex pt-7 pb-4"
                          >mdi-security</v-icon>
                          <h3
                           class="font-weight-bold"
                          
                          >Trusted Security Protocols</h3>
                          <span
                           class="d-flex pa-6 font-italic"
                          >We ensure that each and every transaction is protected to ensure a seamless experience</span>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                         hover
                         height="250"
                        >
                            <v-icon
                             large
                             color="#1B88E4"
                             class="d-flex pt-7 pb-4"
                            >mdi-handshake</v-icon>
                            <h3
                             class="font-weight-bold"
                            >Community Driven</h3>
                            <span
                             class="d-flex pa-6 font-italic"
                            >We seek to provide a platform of features dictated by the community we serve.</span>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card
                         hover
                         height="250"
                        >
                            <v-icon  
                             large
                             color="#1B88E4"
                             class="d-flex pt-7 pb-4"
                            >mdi-truck-fast-outline</v-icon>
                            <h3
                             class="font-weight-bold"
                            >Fast Delivery</h3>
                            <span
                             class="d-flex pa-6 font-italic"
                            >We seek to provide the fastest purchasing and selling experience on the market</span>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div
         data-test="highlighted-feature"
         class="additional-content"
        >
                <v-row>
                    <v-col
                    >
                        <v-img
                        src="@/assets/welcomeMessageFeature.jpg"
                        height="200"
                        >
                         <v-container
                          fluid
                         >
                             <v-row
                              justify="start"
                              align-content="start"
                             >
                                 <v-col
                                  cols="6"
                                  align-self="start"
                                 >
                                     <h1
                                      class="white--text"
                                     >Everything in one place</h1>
                                     <span
                                      class="white--text font-italic"
                                     >
                                         We bring together all of the items that you would want to exchange
                                     </span>
                                 </v-col>
                             </v-row>
                         </v-container>
                        </v-img>
                    </v-col>
                </v-row>
        </div>
        <div
         data-test="contact-information"
         class="contact"
        >
            <v-container>
                <v-row
                 no-gutters
                >
                    <v-col>
                        <span>Contact Us</span>
                    </v-col>
                    <v-col>
                        <v-icon
                        color="red"
                        >mdi-youtube</v-icon>
                    </v-col>
                    <v-col>
                        <v-icon
                        color="blue"
                        >mdi-twitter</v-icon>
                    </v-col>
                    <v-col>
                        <v-icon
                        color="purple"
                        >mdi-twitch</v-icon>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-divider></v-divider>
        <div
         data-test="license-information"
         class="license d-flex pa-10 justify-center"
        >
         <p
          class="font-weight-bold"
         >&copy; 2020 Kevin Abraham </p>
        </div>
        
    </div>    
</template>

<script>
export default {
    name: 'Welcome',
    methods: {
        pushToRegistrationPage() {
            this.$router.push('/accounts/signup')
        },
    }
}
</script>

<style>

</style>