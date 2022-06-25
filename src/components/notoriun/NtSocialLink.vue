<template>
  <q-btn
    v-bind="{...$attrs, ...extendsAttrs}"
  />
</template>

<!-- This script for defining icon sources and type could be put in external ts file -->
<script lang="ts">

const iconSources = {
  facebook_black: () => import('@assests/network/facebook_black.svg'),
  facebook_color: () => import('@assests/network/facebook_black.svg'),
  facebook_white: () => import('@assests/network/facebook_black.svg'),
  whastapp_black: () => import('@assests/network/whastapp_black.svg'),
  whastapp_color: () => import('@assests/network/whastapp_black.svg'),
  whastapp_white: () => import('@assests/network/whastapp_black.svg'),
};
export type IconSources = keyof typeof iconSources;

</script>


<script setup lang="ts">

import { QBtn } from 'quasar'

import { ref } from 'vue'
/** define all the icons that we want to make available here */

interface Props {
  icon:string
  url: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = withDefaults(defineProps<Props>(),{
  url:'#',
  icon:'facebook-white',
})

const extendsAttrs = ref<any>(props)

</script>
