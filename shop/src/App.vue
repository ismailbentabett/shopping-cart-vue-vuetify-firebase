<template>
  <v-app>
    <v-app-bar dark>
     <v-app-bar-nav-icon @click.native="show = true"></v-app-bar-nav-icon>
      <v-toolbar-title >
          <router-link to="/" class="text-decoration-none white--text">Shopping Cart</router-link>
        </v-toolbar-title>
       <v-spacer></v-spacer>
      <v-btn to="/login" flat dark>
        <v-icon left>lock_open</v-icon>
        Login
      </v-btn>
       <v-btn to="/signup" flat dark>
        <v-icon left>face</v-icon>
        Signup
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer v-model="show" dark absolute temporary>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer>
      
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',



  data(){
    return{
      show:false,
       items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
    }
  },
};
</script>
