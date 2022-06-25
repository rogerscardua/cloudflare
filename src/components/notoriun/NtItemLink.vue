<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
    class="items-center"
  >
    <q-item-label>
      {{ title }}
    </q-item-label>
  </q-item>
</template>

<script setup lang="ts">

interface Props {
  title: string
  link: string
}

// const props = defineProps<{
//   title: { type: string; default: '';}
//   link: { type: string ; default: '#';}
// }>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(),{
  title:'',
  link:'#'
})

</script>
