<template>
  <v-card class="mb-4" elevation="3">
    <!-- Encabezado con avatar y fecha -->
    <v-card-title>
      <v-avatar color="deep-purple" class="mr-3">
        <v-icon color="white">mdi-account</v-icon>
      </v-avatar>
      <div>
        <strong>{{ user }}</strong>
        <div class="text-caption grey--text">{{ date }}</div>
      </div>
    </v-card-title>

    <!-- Texto del comentario -->
    <v-card-text>
      {{ comment }}
    </v-card-text>

    <!-- Botones de acción -->
    <v-card-actions>
      <div class="d-flex align-center mr-4">
        <v-btn icon @click="likes++">
          <v-icon color="red">mdi-heart</v-icon>
        </v-btn>
        <span class="ml-2">{{ likes }}</span>
      </div>

      <div class="d-flex align-center">
        <v-btn icon @click="dislikes++">
          <v-icon color="blue-grey">mdi-thumb-down</v-icon>
        </v-btn>
        <span>{{ dislikes }}</span>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  comment: String,
  user: {
    type: String,
    default: "Invitado",
  },
  date: {
    type: String,
    default: () => new Date().toLocaleString(),
  },
});

const likes = ref(0);
const dislikes = ref(0);
</script>
