<template>
  <v-app>
      <v-container grid-list-xs>
         <h1 class="text-center">Products : {{lengtha}}</h1> 

               <v-layout row wrap class="mt-10"
               
                  v-for="(da,index) in data" 
    :key="index">
        
          
        <v-flex style="width: 100px; margin:10px" >
           <v-card
           
    class="mx-auto "
    max-width="400"
 
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>name : {{da[0].name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">caregory : {{da[0].categories}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>price : {{da[0].price}} $</div>
    </v-card-text>

    <v-card-actions>
<!--start of edit-->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on, attrs }">
       
           <v-btn

          v-bind="attrs"
          v-on="on"

        color="grey"
        text
      >
        <v-icon>create</v-icon>
      </v-btn>
      </template>
      <v-card>
        <v-toolbar dark >
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items >
            <v-btn dark text @click="Edit(da[1])">Edit</v-btn>
          </v-toolbar-items>
        </v-toolbar>
               <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
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
                  <v-spacer></v-spacer>
                  
               
            
            </v-col>
          </v-row>
      
      </v-card>
    </v-dialog>
      <!--end of edit-->
    
      <v-btn
        color="grey"
        text
       
      >
        <v-icon  @click="Delete(da[1])">delete</v-icon>
      </v-btn>

      <v-btn
        color="red"
        text
      >
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

        </v-flex>

        

        
        
    
        
      </v-layout>
      </v-container>
  </v-app>
</template>

<script>

import firebase from '../../firebase/init'
var db = firebase.firestore()
export default {
    
name:'Myproduct',
data(){
    return{
      userstate:null,
        data:null,
        lengtha:null,
          dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
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
      id:null
    }
}
,
created(){
  
    const nami = this;
         const array = [];
          const arrayid = [];
      firebase.auth().onAuthStateChanged(function(user) {
        this.userstate = user
        console.log(user)
        if(user != null ){
db.collection('product').where("user_id", "==", user.uid).get()
.then(function(docRef) {
 docRef.docs.forEach(doc=>{
   arrayid.push(doc.id)
     array.push([doc.data(), doc.id])
  
 })
})

nami.id = arrayid;

nami.data =array
console.log(nami.data)

}})
.catch(function(error) {
console.log(error)
})
},
methods:{
  Edit(useruid){
      let name = this.name;
           let categories =this.categories 
            let price = this.price
    var db = firebase.firestore();
      firebase.auth().onAuthStateChanged(function(user) {
if(user != null){
db.collection("product")
  .get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
          // Build doc ref from doc.id
          console.log(useruid)
          db.collection("product").doc(useruid).update({
name:name,
categories:categories,
price:price,
          });
      });
 })
 }})
this.dialog = false
  },
  Delete(useruid){
      firebase.auth().onAuthStateChanged(function(user) {

        if(user != null ){

db.collection("product").doc(useruid).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
})
        }
      })

  }
}
}
</script>

<style>

</style>