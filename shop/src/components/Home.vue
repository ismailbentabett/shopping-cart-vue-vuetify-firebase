<template>
<v-app>
  <v-container>
     <v-parallax src="https://wallpapercave.com/wp/wp2721341.png">
           <v-container fluid grid-list-xl>
        
        <v-layout justify-center row wrap>
          <v-flex xs12 style="text-align: center;">
            <h1 class="display-3 font-weight-thin mb-3">Product search</h1>
          </v-flex>
          <v-flex xs12>
            <v-layout align-center justify-center row wrap>
              <v-flex xs6>
                <v-form>
                  <v-text-field dark label="Search for products" append-icon="search" class="white--text"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

      </v-container>
     </v-parallax>
<v-spacer></v-spacer>
  <v-carousel class="mt-10">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </v-container>
</v-app>
</template>

<script>
  export default {
    name: 'Home',

    data(){
     return{
 items: [
          {
            src: 'https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1542974599-9768b0d8e82e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1541941702428-22609a10cb9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
          {
            src: 'https://images.unsplash.com/photo-1562986398-ef6efbbc9537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          },
        ],
     }
    },
  }
</script>
