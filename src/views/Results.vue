<template>
  <v-container>
    <h1 class="mb-10">Wynik losowania</h1>
    <v-card class="mx-auto" max-width="400">
      <v-img src="https://media.giphy.com/media/l3vRebb6HyeIgvmQ8/giphy.gif"></v-img>
      <v-card-title v-if="myTaker">Kto dostaje prezent ode mnie? {{ myTaker.name }}!</v-card-title>
      <v-card-title v-else>Szukam osoby do obdarowania ...</v-card-title>
    </v-card>
    <v-card class="mx-auto" max-width="400" v-if="user">
      <v-card-title>Cześć {{ user.name }}</v-card-title>
      <v-card-actions>
        <v-btn outlined rounded text @click="logout">
          Wyloguj
        </v-btn>
      </v-card-actions>
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
      const presentList = await getList()
      const firstPresent = _.head(presentList)
      const users = await getUsers()
      const usersWithoutMe = _.map(
        _.filter(users, element => element.email !== this.user.email),
        element => element.email
      )
      const usersWithPresents = _.map(presentList, element => element.to)
      let potentialTakers = _.difference(usersWithoutMe, usersWithPresents)

      if (potentialTakers.length > 1 && firstPresent) {
        potentialTakers = _.filter(potentialTakers, element => element !== firstPresent.from)
      }

      const randomTaker = _.sample(potentialTakers)

      try {
        addPresent(this.user.email, randomTaker)
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
    logout() {
      this.$session.destroy()
      this.$router.push('/')
    },
  },
  async mounted() {
    this.user = this.$session.get('user')
    this.myTaker = await this.getMyPresentTaker()
    if (!this.myTaker) {
      await this.pickPresentRecipienteRandomly()
      this.myTaker = await this.getMyPresentTaker()
    }
  },
}
</script>
