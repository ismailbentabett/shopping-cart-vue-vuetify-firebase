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
                  <v-toolbar-title>Signup</v-toolbar-title>
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
                      label="Email"
                      name="Signup"
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
                  <v-btn color="dark" @click="Signup()" dark>Signup</v-btn>
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
    name: 'Signup',

    data(){
     return{
       email:null,
       password:null
     }
    },
    methods:{
forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      }
      ,
      Signup(){
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
  .then(()=>{
    this.$router.push({name:'Home'})
    this.forceRerender();

  })
  .catch(function(error) {
  // Handle Errors here.
  console.log(error.code);
   console.log(error.message);

  // ...
});
  this.$router.push({name:'Home'})
    this.forceRerender();

      }

    }
  }
</script>
