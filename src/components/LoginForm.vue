<template>
  <v-container>
    <div v-if="!user">
      <h1 class="mb-10">
        Przedstaw się ładnie
      </h1>
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="email"
          label="Twój e-mail "
          id="email"
          placeholder="janek@kowalski.net"
          type="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Hasło"
          id="password"
          placeholder="**********"
          type="password"
          :hint="`Jeżeli nie znasz hasła, napisz do administratora: ${adminEmail}`"
        ></v-text-field>
        <v-btn type="submit" class="mt-10" color="primary">Losuj!</v-btn>
        <div class="mt-10" v-if="failedLogin">
          Nieładnie się przedstawiłeś
        </div>
      </v-form>
    </div>
    <div v-else>
      <p>Cześć {{ user.name }}</p>
      <v-btn type="submit" class="mt-10" color="primary" @click="logout">Wyloguj mnie</v-btn>
    </div>
  </v-container>
</template>
<script>
import config from '@/config/app'
import { loginByEmailAndPassword } from '@/services/authentication'

export default {
  name: 'LoginForm',
  data: () => ({
    adminEmail: config.adminEmail,
    email: '',
    password: '',
    failedLogin: false,
    message: '',
    user: null,
  }),
  methods: {
    loginByEmailAndPassword,
    async login() {
      this.user = await loginByEmailAndPassword({ email: this.email, password: this.password })
      if (this.user) {
        this.$session.start()
        this.$session.set('user', this.user)
        this.$router.push('results')
      } else {
        this.failedLogin = true
      }
    },
    logout() {
      this.$session.destroy()
      this.user = null
    },
  },

  mounted() {
    this.user = this.$session.get('user')
  },
}
</script>
