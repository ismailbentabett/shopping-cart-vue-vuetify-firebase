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
      <v-card-title>name : {{da.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">caregory : {{da.categories}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>price : {{da.price}} $</div>
    </v-card-text>

    <v-card-actions>
     <v-btn
        color="grey"
        text
        to="/edit"
      >
        <v-icon>create</v-icon>
      </v-btn>
      <v-btn
        color="grey"
        text
      >
        <v-icon>delete</v-icon>
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
        data:null,
        lengtha:null
    }
}
,
created(){
    
    const nami = this;
         const array = [];
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
db.collection('product').where("user_id", "==", user.uid).get()
.then(function(docRef) {
 docRef.docs.forEach(doc=>{

     array.push(doc.data())
 })
})
nami.data = array;
console.log(nami.data)


console.log(array)
}).catch(function(error) {
console.log(error)
})
}
}
</script>

<style>

</style>