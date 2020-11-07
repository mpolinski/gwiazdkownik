<template>
  <v-container>
    <h1 class="mb-10">Wynik losowania</h1>
    <v-card class="mx-auto" max-width="400">
      <v-img src="https://media.giphy.com/media/l3vRebb6HyeIgvmQ8/giphy.gif"></v-img>
      <v-card-title v-if="myTaker">Kto dostaje prezent ode mnie? {{ myTaker.name }}!</v-card-title>
      <v-card-title v-else>Szukam osoby do obdarowania ...</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import { getList, addPresent, getTaker } from '@/services/presents'
import { getUser, getUsers } from '@/services/users'
export default {
  name: 'Results',
  data: () => ({
    user: null,
    presentSaved: false,
    myTaker: null,
  }),
  methods: {
    async pickPresentRecipienteRandomly() {
      console.log(this.user)
      const presentList = await getList()
      const users = await getUsers()

      try {
        this.presentSaved = true
      } catch (error) {
        console.error(error)
      }
    },
    async getMyPresentTaker() {
      try {
        const takerEmail = await getTaker(this.user.email)
        if (takerEmail) {
          return await getUser(takerEmail)
        }
      } catch (error) {
        console.error(error)
        return null
      }
    },
  },
  async mounted() {
    this.user = this.$session.get('user')
    this.myTaker = await this.getMyPresentTaker()
    if (!this.myTaker) {
      await this.pickPresentRecipienteRandomly()
    }
  },
}
</script>
