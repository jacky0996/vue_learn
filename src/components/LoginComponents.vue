<script setup lang="ts">
import loginLogic from '../../public/js/loginLogic.js'
const { form, getError, login } = loginLogic()
</script>


<template>
  <div class="main-form">
    <h1>登入帳號</h1>
    <div class="form-group form-group-first" :class="{ error: getError('email') }">
      <label class="label" for="email">Email</label>
      <input type="text" id="email" placeholder="輸入Email/帳號" v-model="form.email" />
      <div class="error" v-if="getError('email')" v-cloak>{{ getError('email').value }}</div>
    </div>
    <div class="form-group" :class="{ error: getError('password') }">
      <label class="label" for="password">密碼(password)</label>
      <input
        type="password"
        id="password"
        maxlength="20"
        placeholder="填寫您的密碼"
        v-model="form.password"
        @keyup.enter="login"
      />
      <div class="error" v-if="getError('password')" v-cloak>
        {{ getError('password').value }}
      </div>
    </div>
    <div class="agree-text">
      登入或完成註冊即代表您同意我們的 <a href="/terms">「服務條款」</a>&<a href="/privacy"
        >「隱私政策」</a
      >。並確認您至少年滿18歲。
    </div>
    <button type="button" class="btn btn-block btn-primary" @click="login">登入(login)</button>
    <div class="tips-box text-small">
      <a href="/password_forget" class="tips-link">忘記密碼</a>
      <div>還沒有帳號嗎？<a href="/register" class="tips-link">前往註冊 G8FANS</a></div>
    </div>
  </div>
</template>