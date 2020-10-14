<template>
  <v-container class="full-height">
    <v-row class="text-center full-height" justify="center" align="center">
      <v-col cols="12">
        <LoginForm/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";

    export default {
        name: 'Login',
        components: {LoginForm},
        beforeCreate: function () {
            this.$store.commit('setActiveTab', "login")
        }
    }
</script>

<style scoped>
.full-height {
  height: 100%;
}
</style>
