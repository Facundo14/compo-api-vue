<template>
  <h1>Aprendiendo slots</h1>
  <button @click="openModal">Abrir modal</button>

  <modal v-if="isOpen" @on:close="closeModal">
    <!-- <h2>Hola</h2>
    <p>Nisi ad pariatur occaecat mollit do enim eiusmod occaecat consequat Lorem incididunt minim.</p>
    <button>Salir</button> -->
    <template v-slot:header>
        <h2>Titulo del modal</h2>
    </template>
    <template v-slot:footer>
        <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:body>
        <p>Mollit consequat do ut consectetur cillum irure culpa enim.</p>
    </template>
  </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
export default {
    components: { Modal },
    setup(){
        const isOpen = ref(false)


        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }

}
</script>

<style>

</style>