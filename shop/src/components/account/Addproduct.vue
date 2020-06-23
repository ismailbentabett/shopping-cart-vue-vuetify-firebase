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
                      <v-select
                        v-model="categories"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Categories"
                        required
                        ></v-select>
                    <v-text-field
                      label="Product name"
                      name="Name"
                      prepend-icon="mdi-account"
                      type="text"
                      v-model="name"
                     required
                    ></v-text-field>
                        
                    <v-text-field
                      id="Price"
                      label="Price"
                      name="Price"
                      prepend-icon="mdi-lock"
                      type="Number"
                      v-model="price"
                      required
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="dark" @click=" Addproduct()" dark>Add</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
</v-app>
</template>

<script>
import firebase from '../../firebase/init'
var db = firebase.firestore()
  export default {
    name: 'Addproduct',

    data(){
     return{
         select:null,
categories:null,
name:null,
price:null
         ,
    items: [
        "tech",
        'food',
        'random shit',
        'drugs',
        'chlothes',
      ],
     }
    },



    methods:{

        Addproduct(){
           let name = this.name;
           let categories =this.categories 
            let price = this.price
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
db.collection('product').add({
name:name,
categories:categories,
price:price,
user_id:user.uid

}).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})

}).catch(function(error) {
console.log(error)
})



    }
    }
   
  }
</script>
