<template>
  <v-app>
    <v-app-bar dark>
     <v-app-bar-nav-icon @click.native="show = true"></v-app-bar-nav-icon>
      <v-toolbar-title >
          <router-link to="/" class="text-decoration-none white--text">Shopping Cart</router-link>
        </v-toolbar-title>
       <v-spacer></v-spacer>
      <v-btn to="/login" flat dark v-if="userstate == false">
        <v-icon left>lock_open</v-icon>
        Login
      </v-btn>
       <v-btn to="/signup" flat dark v-if="userstate == false">
        <v-icon left>face</v-icon>
        Signup
      </v-btn>
        <v-btn @click="Signout()" flat dark   v-if="userstate == true">
        <v-icon left>input</v-icon>
        Logout
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer v-model="show" dark absolute temporary>
          <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Shop
          </v-list-item-title>
          <v-list-item-subtitle>
              choose
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
<h4 v-if="userstate == false" class="white--text center">log in or sign our first</h4>
      <v-list
        dense
        nav
        v-if="userstate == true"
      >
        <v-list-item link @click=" Gotoaccount()" :to="{name: 'Account', params: { id: gotothere }}">
          <v-list-item-icon>
            <v-icon >account_circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >Account</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       <v-list-item to="/product" link>
          <v-list-item-icon>
            <v-icon >view_quilt</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >My Products</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item  to="/add"  link>
          <v-list-item-icon>
            <v-icon >add_circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >Add Product</v-list-item-title>
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
import firebase from './firebase/init'
export default {
  name: 'App',



  data(){
    return{
      show:false,
       gotothere:null,
        right: null,
        userstate:false
    }
  },
 
created(){
  const nami = this
        firebase.auth().onAuthStateChanged(function(user) {
console.log(user)

    if(user != null){
nami.userstate = true
    }else{
nami.userstate = false

    }

        })
        console.log(this.userstate)

}
 ,
  methods:{
    Gotoaccount(){

      var user = firebase.auth().currentUser;

if (user) {
this.gotothere = user.uid

} else {
  console.log('connect first nigga')
}
    }
    ,

    Signout(){
    firebase.auth().signOut().then(function() {
console.log('signedout')
this.$router.push({name:'Home'})
}).catch(function(error) {
console.log(error)
});
    }
  }
};
</script>
