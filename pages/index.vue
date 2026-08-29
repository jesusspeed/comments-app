<template>
  <v-container class="home text-center mt-10">
    <!-- Encabezado -->
    <h1 class="text-h4 text-primary mb-4">Bienvenido al Microblog</h1>
    <p class="text-subtitle-1 mb-6">Comentarios.</p>

    <!-- Botón para ir a comentarios -->
    <NuxtLink to="/comentarios">
      <v-btn color="primary" large>
        <v-icon left>mdi-comment-text</v-icon>
        Ir a comentarios
      </v-btn>
    </NuxtLink>

    <!-- Tarjeta de presentación -->
    <v-card class="mt-10 mx-auto" max-width="500" elevation="3">
      <v-card-title class="justify-center">
        <v-icon color="deep-purple" size="40">mdi-pencil</v-icon>
      </v-card-title>
      <v-card-text>
        Este microblog está hecho con <strong>Nuxt 3</strong> y <strong>Vuetify</strong>.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.home {
  max-width: 700px;
  margin: auto;
}
</style>
