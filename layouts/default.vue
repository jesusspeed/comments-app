<template>
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar app dark style="background: linear-gradient(to right, #00f2fe)">
      <v-toolbar-title><strong>Comentarios</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" component="RouterLink" text>Inicio</v-btn>
      <v-btn to="/comentarios" component="RouterLink" text>Comentarios</v-btn>
    </v-app-bar>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!-- Footer opcional -->
    <v-footer app color="grey lighten-4">
      <span class="ml-4">© 2026 Jesús Méndez</span>
    </v-footer>
  </v-app>
</template>

<style scoped>
.app-background {
  background: linear-gradient(to right, #00f2fe, #4facfe);
  min-height: 100vh;
}
</style>
<script setup>
// No necesitas lógica aquí, solo estructura
</script>

<style scoped>
.v-toolbar-title {
  font-weight: bold;
}
</style>
