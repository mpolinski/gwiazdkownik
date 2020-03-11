<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <router-view></router-view>
        </v-col>
        <v-col>
          <v-img src="@/assets/santa_1.gif"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
}
</script>
