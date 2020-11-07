<template>
  <v-container>
    <div v-if="user">
      <span>Cześć {{ user.name }}</span>
      <v-btn type="submit" class="mt-10" color="primary" @click="logout">Wyloguj mnie</v-btn>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'User',
  data: () => ({
    user: null,
  }),
  methods: {
    logout() {
      this.$session.destroy()
      this.user = null
      this.$router.push('/')
    },
  },

  mounted() {
    this.user = this.$session.get('user')
  },
}
</script>
