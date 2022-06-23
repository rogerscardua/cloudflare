<template>
  <q-page id="pagelogin">
    <!-- content -->
    <div class="row-height">
      <div
        class="column col-4 q-px-sm-md between-center"
        style="min-width: 340px; min-height: 550px; ">
        <div class="row q-pt-md">
          <div class="col-2">
            <q-img
              class="q-size-56 q-pr-sx"
              src="~/assets/small_logo.svg" />
          </div>
          <div class="column q-px-md">
            <div class="text-weight-bolder text-h6 text-black ">
              Titulo da Aplicação
            </div>
            <div class="text-weight-bolder text-subtitle1 text-grey-6">
              Subititulo
            </div>
          </div>
        </div>
        <section v-if="formSignin" id="formSignin" class="row">
          <q-form class="fit q-gutter-md">
            <div class="text-h3 text-weight-bold q-mb-sm">
              Entrar
            </div>
            <q-input
              v-model="username"
              type="email"
              placeholder="Digite o e-mail*"
            />
            <q-input
              v-model="password"
              type="password"
              label="Senha"
              placeholder="Digite a senha*"
            />
            <div class="row q-mt-md justify-between">
              <q-btn
                label="Entrar"
                class="q-mt-md" />
              <q-btn
                label="Esqueci minha senha"
                flat
                class="q-mt-md"
                @click="swapForm" />
            </div>
          </q-form>
          <div class="fit row q-mt-lg justify-center">
            Quero me cadastrar
          </div>
        </section>
        <section v-if="!formSignin" id="formReset" class="row">
          <form class="fit q-gutter-md" action="">
            <div class="text-h3 text-weight-bold q-mb-sm">
              Recuperar senha
            </div>
            <q-input
              v-model="username"
              for="input-login"
              outlined
              dense
              placeholder="Digite o e-mail cadastrado*"
            />
            <div class="row q-mt-md justify-between">
              <q-btn
                id="btn-recuperar"
                for="btn-recuperar"
                color="primary"
                label="Recuperar"
                class="q-mt-md" />
              <q-btn
                flat
                label="Entrar no sistema"
                class="q-mt-md"
                @click="swapForm" />
            </div>
          </form>
        </section>
        <section id="politicas" class="row text-subtitle2">
          Ao acessar o sistema você concorda com as <a href="#">Políticas de Privacidade</a> &nbsp; e &nbsp; <a href="#">Termos de Uso</a>
        </section>
      </div>
      <div v-if="!$q.screen.xs" class="col bg-image-login" />
    </div>
  </q-page>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'

const username = ref('')
const password = ref('')

const formSignin = ref(true)

const teste = ref('')

watch(teste, (value) => {
  console.log(value)
})

/* const onSubmit = () => {
  console.log('submit')
}
 */
const swapForm = () => {
  formSignin.value = !formSignin.value
}

</script>

<style>

.title-responsive {
  --minFontSize: 20px;
  --maxFontSize: 72px;
  --scaler: 5vw;
  font-size: clamp( var(--minFontSize), var(--scaler), var(--maxFontSize) );
}
.subtitle-responsive {
  font-size:5vw;
}
/* https://cloudfour.com/thinks/responsive-images-101-part-8-css-images/ */
.bg-image-login {
  background-image: url('src/assets/background_login.webP');
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
}

</style>
