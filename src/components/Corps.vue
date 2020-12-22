<!--<template>
    <v-main class="grey lighten-3">
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
                  > 
                  {{page}}
                  </v-btn>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            
              
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>

  export default {
    data: () => ({
      pages: [
        'Films',
        'Evenement',
        'A propos',
      ],
    }),
  }
</script> -->