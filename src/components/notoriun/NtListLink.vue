<template>
  <q-list>
    <q-item-label header>
      {{ props.header }}
    </q-item-label>
    <nt-item-link v-for="link in listItems" :key="link.title" v-bind="link" />
  </q-list>
</template>

<script setup lang="ts">

import NtItemLink from 'components/notoriun/NtItemLink.vue'

interface IItemList {
  title: string
  link: string
}

const props = defineProps<{
  header: string
  class?: string
  listItems: Array<IItemList>
}>()

</script>
