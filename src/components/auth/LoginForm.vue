<template>
  <div class="loginForm ma-auto">
    <ValidationObserver v-slot="{ invalid }">
      <h1>Sign in, friend. You so close!</h1>
      <form class="login" @submit.prevent="login">
        <v-container>
          <v-row>
            <v-col cols="12">
              <ValidationProvider name="E-mail" rules="required|max:40" v-slot="{ errors, valid }">
                <v-text-field
                    v-model="username"
                    :error-messages="errors"
                    :success="valid"
                    label="E-mail or username"
                ></v-text-field>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <ValidationProvider name="Password" rules="required|min:6|max:20"
                                  v-slot="{ errors, valid }">
                <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    :success="valid"
                    label="Password"
                ></v-text-field>
              </ValidationProvider>
            </v-col>

            <v-col cols="12">
              <v-btn color="primary" type="submit" :disabled="invalid">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {ValidationObserver, ValidationProvider} from 'vee-validate';

export default {
  name: 'LoginForm',
  data() {
    return {
      username: "",
      password: "",
    }
  },
  components: {
    ValidationObserver, ValidationProvider,
  },
  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', {username, password})
          .then(() => {
            this.$router.push('/freezer')
          })
          .catch(err => console.log(err))
    }
  }}
</script>

<style scoped>

</style>