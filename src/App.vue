<template>
  <div id="app">
   <v-app id="example-3" toolbar>
    <v-navigation-drawer permanent floating light class="transparent">
      <v-card class="ma-3">
        <v-list dense class="py-0">
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title><router-link :to="item.link">{{ item.title }}</router-link></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-toolbar class="purple" dark>
      <v-toolbar-title>Twitter App</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard', link: '/' },
          { title: 'Tweets', icon: 'question_answer', link: '/tweets' }
        ],
        right: null
      }
    }
}
</script>

<style>
#app {
}
</style>
