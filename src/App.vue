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
      <v-row> Gwiazdkownik v{{ appVersion }} </v-row>
    </v-container>
  </v-app>
</template>

<script>
import config from '@/config/app'
export default {
  name: 'App',
  data: () => ({
    appVersion: config.version,
  }),
}
</script>
