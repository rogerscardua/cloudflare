<template>
  <q-page padding>
    <section class="n-container-grid justify-between">
      <nt-list-link header="Institucional" :list-items="institucionalList" />
      <nt-list-link header="Empregos" :list-items="empregosList" />
      <section id="section_fale_conosco" class="col">
        <nt-list-link header="Fale comosco" :list-items="faleconoscolList" />
        <q-btn
          outline
          color="green"
          icon="img:src/assets/network/whatsapp_white.svg"
          label="Falar pelo WhastApp"
          size="12px"
          class="q-ma-md" />
      </section>
      <div>
        <p class="r-fs-h1">
          Novidade e Lançamento
        </p>
      </div>
    </section>
    <section id="info-empresa" class="row q-pa-md">
      <div class="col-xs-12 col-sm-6">
        <!--   Empresa -->
        <h1 class="text-subtitle1">
          CrushInBar
        </h1>
        <h1 class="text-subtitle2">
          Notoriun Tecnologia em Software Ltda
        </h1>
      </div>
      <div class="col-xs-12 col-sm-6">
        <!-- redes sociais -->
        <div class="row q-gutter-sm">
          <q-icon color="white" size="32px" name="fa-brands fa-youtube" />
          <q-icon name="brands" />
          <q-icon name="instagran" />
          <q-icon name="l" />
        </div>
      </div>
    </section>
    <section class="flex q-ml-md justify-around ">
      <nt-list-link header="Institucional" :list-items="institucionalList" class="r-4-cols" />
      <nt-list-link header="Empregos" :list-items="empregosList" class="r-4-cols" />
      <section id="section_fale_conosco" class="r-4-cols">
        <nt-list-link header="Fale comosco" :list-items="faleconoscolList" />
        <q-btn
          outline
          color="green"
          icon="img:src/assets/network/whatsapp_white.svg"
          label="Falar pelo WhastApp"
          size="12px"
          class="q-ma-md" />
      </section>
      <div class="r-4-cols">
        <p class="r-fs-text">
          Novidade e Lançamento
        </p>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">

import NtListLink  from 'components/notoriun/NtListLink.vue';

const institucionalList = [
  { title: 'Sobre nós', link: '' },
  { title: 'Política de Privacidade', link: '' },
  { title: 'Termos de Uso', link: '' },
  { title: 'Políticas de Cookies', link: '' },
  { title: 'Propriedade intelectual', link: '' }
]

const empregosList = [
  { title: 'Portal de empregos', link: '' },
  { title: 'Blog de tecnologia', link: '' }
]

const faleconoscolList = [
  { title: 'Contato', link: '' },
  { title: 'Perguntas frequentes', link: '' }
]


</script>

