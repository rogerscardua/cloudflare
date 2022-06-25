<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title>
        Quasar App
      </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts" >

import {  ref } from 'vue';

const leftDrawerOpen = ref(false)

const  toggleLeftDrawer = ()=> {
  leftDrawerOpen.value = !leftDrawerOpen.value
}



</script>
