<template>
  <v-card class="grey lighten-4 elevation-0">
  <h4>My saved tweets on database</h4>
    <v-card-text>
      <v-container fluid>
          <v-layout row>
      <v-card>
        <v-list two-line>
          <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.tweet_text">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.tweet_text }}</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.name }} ({{item.username}})</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.location }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.created }}</v-list-tile-action-text>
              <v-icon class="grey--text text--lighten-1">star_border</v-icon>
            </v-list-tile-action>
            <v-divider v-if="index + 1 < items.length"></v-divider>
          </v-list-tile>
        </v-list>
      </v-card>
  </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                items: []
            }
        },
        created () {
           axios.get('http://localhost:3006/list')
            .then( (response) => {
                this.items = response.data.reverse()
            })
            .catch( (error) => {
                console.log(error);
            }); 
        }
    }
</script>
<style lang="">
    
</style>