<template>
<div class="home">
  <v-app id="inspire">
    <v-app-bar
      app 
    >
      <v-container class="py-0 fill-height"> <!-- bouton bar de navigation-->
        <v-btn
          v-for="link in links"
          :key="link.text"
          text
          router :to="link.route"
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260"> <!--contour bouton navbar-->
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

<v-spacer></v-spacer>

 <v-parallax    
 src="BreV.png"
 height="700"
 >              <!--scroll on photo bandeau principal du site-->
 </v-parallax>

    <v-main class="grey lighten-3">   <!-- rectangle de navigation coté gauche-->
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
              
                 <v-btn 
                    color="blue"
                    :loading="value"
                    @click.native="click"
                    :disabled="value"
                     v-for="page in pages"
                    :key="page"
                    text
                  >                   <!-- Bouton Film/eveement.a propos-->
                  {{page}}
                  </v-btn>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>                 <!--partie centrale site-->
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <H1  > Bienvenue sur Breizh Video </H1>
              
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</div>
</template>

<script>

  export default {
    data: () => ({
      links: [          /* Pour ce qui est des boutons, jai reussi à les connecter 
                          en faisant ce petit code, sauf que je n'ai pas eu le temps de chercher 
                          une solution pour que ca ne s'affiche pas sur le site! */
        {text: 'Home', route: '/'}, 
        {text: 'Nouveauté', route: "/about"},
        {text: 'Mon Compte', route: '/MonCompte'},
      ],
      pages: [
        'Films',
        'Evenement',
        'A propos',
      ],
    }),
  }
</script>