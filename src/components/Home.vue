<template>
  <v-card class="grey lighten-4 elevation-0">
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="search on twitter"
              id="testing"
              v-model="searchTerm"
            ></v-text-field>
          </v-flex>
           <v-flex xs4>
             <v-btn primary dark @click="search">Search</v-btn>
          </v-flex>
        </v-layout>
          <v-flex xs4>
             <v-btn error dark @click="saveTweets" v-if="items.length > 0">Save tweets</v-btn>
          </v-flex>
          <v-layout row>
      <v-card>
        <v-list two-line>
          <v-list-tile avatar ripple v-for="(item, index) in items" v-bind:key="item.text">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.name }} ({{item.username}})</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ item.date }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ item.hashtags }}</v-list-tile-action-text>
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
            searchTerm: '',
            items: []
        }
     },
     methods: {
         search () {
            axios.get('http://localhost:3006/?q='+this.searchTerm)
            .then( (response) => {
                this.items = response.data
            })
            .catch( (error) => {
                console.log(error);
            });
         },
         saveTweets () {
          axios.post('http://localhost:3006/save', this.items)
            .then(response => {
                this.items = []
                this.searchTerm = ''
            })
            .catch(error => {
                console.log(error);
            })
         }
    }
    }
</script>
<style lang="">
    
</style>