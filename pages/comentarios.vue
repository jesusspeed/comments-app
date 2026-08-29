<template>
  <v-container class="microblog">
    <h1 class="text-h5 mb-4">Micro blog de comentarios</h1>

    <!-- Formulario -->
    <v-form @submit.prevent="addComment">
      <v-textarea
        v-model="newComment"
        label="Escribe tu comentario..."
        outlined
        clearable
        auto-grow
        :rules="[(v) => !!v || 'El comentario no puede estar vacío']"
      ></v-textarea>
      <v-btn type="submit" color="primary" class="mt-2">Publicar</v-btn>
    </v-form>

    <!-- Mensaje si no hay comentarios -->
    <div v-if="comments.length === 0" class="mt-4">
      <p>No hay comentarios aún.</p>
    </div>

    <!-- Lista de comentarios -->
    <CommentCard
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment.text"
      :user="comment.user"
      :date="comment.date"
    />
  </v-container>
</template>

<script setup>
import CommentCard from "~/components/Card.vue";
import { ref } from "vue";

const newComment = ref("");
const comments = ref([]);

function addComment() {
  if (newComment.value.trim() !== "") {
    comments.value.unshift({
      text: newComment.value.trim(),
      user: "Invitado",
      date: new Date().toLocaleString(),
    });
    newComment.value = "";
  }
}
</script>

<style scoped>
.microblog {
  max-width: 600px;
  margin: 2rem auto;
}
</style>
