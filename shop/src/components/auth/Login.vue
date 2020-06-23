<template>
<v-app>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="dark"
                  dark
                  flat
                >
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn
                        :href="source"
                        icon
                        large
                        target="_blank"
                        v-on="on"
                      >
                      </v-btn>
                    </template>
                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Login"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="email"
                    ></v-text-field>
  
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="dark" @click="Signin()" dark>Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
</v-app>
</template>

<script>
import firebase from '../../firebase/init'

  export default {
    name: 'Login',

    data(){
     return{
       email:null,
       password:null
     }
    },
    methods:{
      Signin(){
  firebase.auth().signInWithEmailAndPassword(this.email, this.password)
  .then(user =>{
    console.log('logged')
this.$router.push({ name: 'Account', params: { id: user.user.uid } })
  })
  .catch(function(error) {
  // Handle Errors here.
  console.log(error.code);
   console.log(error.message);

  // ...
});
      }

    }
  }
</script>
