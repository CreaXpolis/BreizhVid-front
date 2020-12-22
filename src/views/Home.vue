<template>
<div class="home">
  <h1> Degemer mat </h1>

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
</script>