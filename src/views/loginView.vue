<script setup lang="ts">
import loginLogic from '../../public/js/loginLogic.js'
import LoginComponents from '../components/LoginComponents.vue'
const { form, getError, login } = loginLogic()
</script>

<template>
  <main>
    <LoginComponents />
  </main>
</template>
<style scoped>
main {
  text-align: center;
}
.form-group-first {
  margin-top: 5%;
}
.form-group label {
  display: block;
}
.form-group input {
  width: 20%;
}
</style>