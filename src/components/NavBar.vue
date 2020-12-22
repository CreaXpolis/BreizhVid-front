<!--<template>
<div class="Navbar">
    <v-app id="inspire">
    
      <v-app-bar
      app  >
      <v-container class="py-0 fill-height">
        <v-btn
          v-for="link in links"
          :key="link.text"
          text
          router :to="link.route"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field  
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
          </v-responsive>
         </v-container>
       </v-app-bar>
    </v-app>

<v-spacer></v-spacer>

 <v-parallax
 src="BreV.png"
 height="700"
 >
 </v-parallax>
    
</div>
 </template>

<script>
export default {
  data: () => ({
    links: [
      { text: "Home", route: "/" },
      { text: "Nouveauté", route: "/about" },
      { text: "Mon Compte", route: "/MonCompte" },
    ],
  }),
};
</script> -->
 
 